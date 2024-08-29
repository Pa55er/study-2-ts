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
    const getElement = (id) => {
        const element = document.getElementById(id);
        if (!element)
            throw new Error(`Element with id '${id}' not found`);
        return element;
    };
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
    document.querySelector(".wrap").appendChild(loader);
    const $loader = document.querySelector(".loader");
    const elements = {
        $postsCon: getElement("posts-con"),
        $filter: getElement("filter"),
    };
    let limit = 5;
    let page = 1;
    let isLoading = false;
    let currentTerm = "";
    let isCheckingScroll = false;
    let noMore = false;
    const getPosts = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (searchTerm = "") {
        try {
            let url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
            if (searchTerm) {
                url += `&q=${encodeURIComponent(searchTerm)}`;
            }
            const res = yield fetch(url);
            const data = yield res.json();
            if (data.length === 0) {
                noMore = true;
            }
            return data;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error : ${error.message} `);
            }
            else {
                throw new Error(`Error : An unknown error occurred `);
            }
        }
    });
    const showPosts = (element) => __awaiter(void 0, void 0, void 0, function* () {
        const posts = yield getPosts(currentTerm);
        console.log(posts);
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
            element.appendChild(postElm);
        });
        checkScrollable();
    });
    const newLoading = () => {
        if (isLoading)
            return;
        isLoading = true;
        $loader.classList.add("show");
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            page++;
            console.log(page);
            yield showPosts(elements.$postsCon);
            isLoading = false;
            $loader.classList.remove("show");
        }), 1000);
    };
    const checkScrollable = () => {
        if (isCheckingScroll)
            return;
        isCheckingScroll = true;
        const checkAndLoad = () => {
            if (document.documentElement.scrollHeight <= window.innerHeight && !noMore) {
                newLoading();
                setTimeout(checkAndLoad, 1500);
            }
            else {
                isCheckingScroll = false;
            }
        };
        checkAndLoad();
    };
    window.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
            newLoading();
        }
    });
    const filterPosts = ($filter, $postsCon) => {
        const searchTerm = $filter.value.trim();
        if (searchTerm !== currentTerm) {
            currentTerm = searchTerm;
            page = 1;
            $postsCon.innerHTML = "";
            showPosts(elements.$postsCon);
            noMore = true;
        }
    };
    elements.$filter.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            const { $postsCon, $filter } = elements;
            filterPosts($filter, $postsCon);
        }
    });
    showPosts(elements.$postsCon).then(() => {
        checkScrollable();
    });
}
