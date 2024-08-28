"use strict";
{
    const STORAGE_KEY = "saveTexts";
    const EMPTY_ARRAY_JSON = "[]";
    const $form = document.querySelector("form");
    const $myText = document.querySelector("#myText");
    const $textList = document.querySelector(".textList");
    function assertElement(element, selector) {
        if (!element) {
            throw new Error(`Element with selector "${selector}" not found`);
        }
    }
    assertElement($form, "form");
    assertElement($myText, "#myText");
    assertElement($textList, ".textList");
    const getSavedTexts = () => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || EMPTY_ARRAY_JSON);
    };
    const addTextList = (textItem) => {
        const li = document.createElement("li");
        li.innerHTML = `- <span class="text">${textItem.text}</span> (${new Date(textItem.timestamp).toLocaleString()})`;
        $textList.prepend(li);
    };
    const saveToLocalStorage = (text) => {
        const savedTexts = getSavedTexts();
        const newText = { text, timestamp: Date.now() };
        savedTexts.push(newText);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTexts));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputText = $myText.value.trim();
        if (inputText !== "") {
            const newText = {
                text: inputText,
                timestamp: Date.now(),
            };
            addTextList(newText);
            $myText.value = "";
            $myText.focus();
            saveToLocalStorage(inputText);
        }
        else {
            console.log("값을 입력해주세요");
        }
    };
    $form.addEventListener("submit", handleSubmit);
    window.addEventListener("load", () => {
        const savedTexts = getSavedTexts();
        savedTexts.forEach(addTextList);
    });
}
