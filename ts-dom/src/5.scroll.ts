// {
//     // DOM 요소 선택 함수 (타입 가드 사용)
//     const getElement = <T extends HTMLElement>(id: string): T => {
//         const element = document.getElementById(id);
//         if (!element) throw new Error(`Element with id '${id}' not found`);
//         return element as T;
//     };

//     const loader = document.createElement("div") as HTMLDivElement;
//     loader.classList.add("loader");
//     loader.innerHTML = `
//             <span></span>
//             <span></span>
//             <span></span>
//         `;
//     document.querySelector(".wrap")!.appendChild(loader);

//     const $loader = document.querySelector(".loader")! as HTMLDivElement;
//     const elements = {
//         $postsCon: getElement<HTMLUListElement>("posts-con"),
//         $filter: getElement<HTMLInputElement>("filter"),
//     };

//     let limit = 5;
//     let page = 1;
//     let isLoading = false;
//     let currentTerm = "";
//     let isCheckingScroll = false;
//     let noMore = false; // 더이상 불러올 데이터가 없을 경우를 확인하기 위한 플래그

//     type Post = {
//         id: number;
//         title: string;
//         body: string;
//     };

//     const getPosts = async (searchTerm: string = "") => {
//         try {
//             let url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
//             if (searchTerm) {
//                 url += `&q=${encodeURIComponent(searchTerm)}`;
//             }
//             const res = await fetch(url);
//             const data: Post[] = await res.json();

//             // 데이터가 0일 때
//             if (data.length === 0) {
//                 noMore = true;
//             }
//             return data;
//         } catch (error) {
//             if (error instanceof Error) {
//                 throw new Error(`Error : ${error.message} `);
//             } else {
//                 throw new Error(`Error : An unknown error occurred `);
//             }
//         }
//     };

//     const showPosts = async (element: HTMLUListElement) => {
//         const posts = await getPosts(currentTerm);
//         console.log(posts);

//         posts.forEach((post) => {
//             const postElm = document.createElement("li") as HTMLLIElement;
//             postElm.classList.add("post");
//             postElm.innerHTML = `
//             <span class="post-number">${post.id}</span>
//             <div class="post-info">
//                 <h2 class="post-title">${post.title}</h2>
//                 <p class="post-body">${post.body}</p>
//             </div>
//             `;
//             element.appendChild(postElm);
//         });

//         // 추가된 부분: 포스트를 추가한 후 스크롤 가능 여부 확인
//         checkScrollable();
//     };

//     const newLoading = () => {
//         if (isLoading) return;
//         isLoading = true;
//         $loader.classList.add("show");
//         setTimeout(async () => {
//             page++;
//             console.log(page);
//             await showPosts(elements.$postsCon);
//             isLoading = false;
//             $loader.classList.remove("show");
//         }, 1000);
//     };

//     // 추가된 함수: 스크롤 가능한지 확인하고 필요하면 더 많은 포스트를 로드하는 함수
//     const checkScrollable = () => {
//         if (isCheckingScroll) return;
//         isCheckingScroll = true;

//         const checkAndLoad = () => {
//             if (document.documentElement.scrollHeight <= window.innerHeight && !noMore) {
//                 newLoading(); // 새로운 포스트 로드
//                 // 로딩이 완료된 후 다시 체크
//                 setTimeout(checkAndLoad, 1500);
//             } else {
//                 isCheckingScroll = false;
//             }
//         };
//         checkAndLoad();
//     };

//     window.addEventListener("scroll", () => {
//         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//         if (scrollTop + clientHeight >= scrollHeight - 20) {
//             // 새로운 데이터를 호출
//             newLoading();
//         }
//     });

//     const filterPosts = ($filter: HTMLInputElement, $postsCon: HTMLUListElement) => {
//         const searchTerm = $filter.value.trim();
//         if (searchTerm !== currentTerm) {
//             currentTerm = searchTerm;
//             page = 1;
//             $postsCon.innerHTML = "";
//             showPosts(elements.$postsCon);
//             noMore = true;
//         }
//     };

//     //   입력폼에서 엔터로 마무리 했을 때 검색 함수 시작
//     elements.$filter.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//             const { $postsCon, $filter } = elements;
//             filterPosts($filter, $postsCon);
//         }
//     });

//     // 수정된 부분: 초기 로드 시 checkScrollable 함수 호출
//     showPosts(elements.$postsCon).then(() => {
//         checkScrollable();
//     });
// }

{
    // 타입 정의
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    // DOM 요소 선택 함수
    const selectElement = <T extends HTMLElement>(selector: string): T => {
        const element = document.querySelector<T>(selector);
        if (!element) {
            throw new Error(`Element with selector "${selector}" not found`);
        }
        return element;
    };

    // 로더 생성 및 추가 함수
    const createLoader = (): void => {
        const loader = document.createElement("div");
        loader.classList.add("loader");
        loader.innerHTML = `<span></span><span></span><span></span>`;
        selectElement(".wrap").appendChild(loader);
    };

    // 상태 관리
    const state = {
        limit: 5,
        page: 1,
        isLoading: false,
        currentTerm: "",
        isCheckingScroll: false,
        noMore: false,
    };

    // posts 가져오기 함수
    const getPosts = async (searchTerm: string = ""): Promise<Post[]> => {
        const url = new URL("https://jsonplaceholder.typicode.com/posts");
        url.searchParams.append("_limit", state.limit.toString());
        url.searchParams.append("_page", state.page.toString());
        if (searchTerm) {
            url.searchParams.append("q", searchTerm);
        }

        const res = await fetch(url.toString());
        const data: Post[] = await res.json();

        state.noMore = data.length === 0;
        return data;
    };

    // posts 표시 함수
    const showPosts = async (): Promise<void> => {
        const posts = await getPosts(state.currentTerm);
        const $postsCon = selectElement<HTMLUListElement>("#posts-con");

        posts.forEach((post) => {
            const postElm = document.createElement("li");
            postElm.classList.add("post");
            postElm.innerHTML = `
            <span class="post-number">${post.id}</span>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
            $postsCon.appendChild(postElm);
        });

        checkScrollable();
    };

    // 새 포스트 로딩 함수
    const loadNewPosts = async (): Promise<void> => {
        if (state.isLoading || state.noMore) return;

        state.isLoading = true;
        selectElement(".loader").classList.add("show");

        try {
            state.page++;
            await showPosts();
        } finally {
            state.isLoading = false;
            selectElement(".loader").classList.remove("show");
        }
    };

    // 스크롤 가능 여부 확인 및 추가 로딩 함수
    const checkScrollable = (): void => {
        if (state.isCheckingScroll) return;
        state.isCheckingScroll = true;

        const checkAndLoad = (): void => {
            if (document.documentElement.scrollHeight <= window.innerHeight && !state.noMore) {
                loadNewPosts().then(() => setTimeout(checkAndLoad, 1500));
            } else {
                state.isCheckingScroll = false;
            }
        };
        checkAndLoad();
    };

    // 스크롤 이벤트 리스너
    const addScrollListener = (): void => {
        window.addEventListener("scroll", () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                loadNewPosts();
            }
        });
    };

    // 포스트 필터링 함수
    const filterPosts = (): void => {
        const $filter = selectElement<HTMLInputElement>("#filter");
        const searchTerm = $filter.value.trim();
        if (searchTerm !== state.currentTerm) {
            state.currentTerm = searchTerm;
            state.page = 1;
            state.noMore = false;
            selectElement<HTMLUListElement>("#posts-con").innerHTML = "";
            showPosts();
        }
    };

    // 키 이벤트 리스너 추가
    const addKeyListener = (): void => {
        selectElement<HTMLInputElement>("#filter").addEventListener("keyup", (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                filterPosts();
            }
        });
    };

    // 초기화 함수
    const initialize = (): void => {
        createLoader();
        addScrollListener();
        addKeyListener();
        showPosts();
    };

    // 애플리케이션 시작
    initialize();
}
