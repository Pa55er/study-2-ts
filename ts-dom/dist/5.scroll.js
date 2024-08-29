"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const selectElement = (selector) => {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`Element with selector "${selector}" not found`);
        }
        return element;
    };
    const createLoader = () => {
        const loader = document.createElement("div");
        loader.classList.add("loader");
        loader.innerHTML = `<span></span><span></span><span></span>`;
        selectElement(".wrap").appendChild(loader);
    };
    const state = {
        limit: 5,
        page: 1,
        isLoading: false,
        currentTerm: "",
        isCheckingScroll: false,
        noMore: false,
    };
    const getPosts = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (searchTerm = "") {
        const url = new URL("https://jsonplaceholder.typicode.com/posts");
        url.searchParams.append("_limit", state.limit.toString());
        url.searchParams.append("_page", state.page.toString());
        if (searchTerm) {
            url.searchParams.append("q", searchTerm);
        }
        const res = yield fetch(url.toString());
        const data = yield res.json();
        state.noMore = data.length === 0;
        return data;
    });
    const showPosts = () => __awaiter(void 0, void 0, void 0, function* () {
        const posts = yield getPosts(state.currentTerm);
        const $postsCon = selectElement("#posts-con");
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
    });
    const loadNewPosts = () => __awaiter(void 0, void 0, void 0, function* () {
        if (state.isLoading || state.noMore)
            return;
        state.isLoading = true;
        selectElement(".loader").classList.add("show");
        try {
            state.page++;
            yield showPosts();
        }
        finally {
            state.isLoading = false;
            selectElement(".loader").classList.remove("show");
        }
    });
    const checkScrollable = () => {
        if (state.isCheckingScroll)
            return;
        state.isCheckingScroll = true;
        const checkAndLoad = () => {
            if (document.documentElement.scrollHeight <= window.innerHeight && !state.noMore) {
                loadNewPosts().then(() => setTimeout(checkAndLoad, 1500));
            }
            else {
                state.isCheckingScroll = false;
            }
        };
        checkAndLoad();
    };
    const addScrollListener = () => {
        window.addEventListener("scroll", () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                loadNewPosts();
            }
        });
    };
    const filterPosts = () => {
        const $filter = selectElement("#filter");
        const searchTerm = $filter.value.trim();
        if (searchTerm !== state.currentTerm) {
            state.currentTerm = searchTerm;
            state.page = 1;
            state.noMore = false;
            selectElement("#posts-con").innerHTML = "";
            showPosts();
        }
    };
    const addKeyListener = () => {
        selectElement("#filter").addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                filterPosts();
            }
        });
    };
    const initialize = () => {
        createLoader();
        addScrollListener();
        addKeyListener();
        showPosts();
    };
    initialize();
}
