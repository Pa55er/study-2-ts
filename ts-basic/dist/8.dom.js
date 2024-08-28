"use strict";
{
    const title = document.getElementById("title");
    if (title) {
        title.innerText = "제목 변경";
    }
    const title2 = document.getElementById("title");
    if (title2 === null || title2 === void 0 ? void 0 : title2.innerHTML) {
        title2.innerHTML = "제목변경222";
    }
    const title3 = document.getElementById("title");
    if (title3 instanceof Element) {
        title3.innerHTML = "제목변경33333";
    }
    const title4 = document.getElementById("title");
    title4.innerHTML = "제목변경 4";
    const link = document.querySelector("a");
    link.href = "https://www.google.com";
    const btn = document.querySelector("button");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
        console.log("클릭됨");
    });
}
