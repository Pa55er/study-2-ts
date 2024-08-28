// {
//     const $form = document.querySelector("form")! as HTMLFormElement;
//     const $myText = document.querySelector("#myText")! as HTMLInputElement;
//     const $textList = document.querySelector(".textList")! as HTMLUListElement;
//     const Storage_KEY = "saveTexts";

//     const addTextList = (text: string) => {
//         const li = document.createElement("li");
//         li.innerHTML = `- <span class="text">${text}</span>`;
//         $textList.prepend(li);
//     };
//     const saveToLocalStorage = (text: string) => {
//         let saveTexts: string[] = JSON.parse(localStorage.getItem(Storage_KEY) || "[]");
//         saveTexts.push(text);
//         localStorage.setItem(Storage_KEY, JSON.stringify(saveTexts));
//     };

//     const handleSubmit = (e: Event) => {
//         e.preventDefault();
//         const inputText = $myText.value;

//         if (inputText.trim() !== "") {
//             addTextList(inputText);
//             $myText.value = "";
//             $myText.focus();
//             saveToLocalStorage(inputText);
//         } else {
//             console.log("값을 입력해주세요");
//         }
//     };

//     $form.addEventListener("submit", handleSubmit);

//     window.addEventListener("load", () => {
//         let saveTexts: string[] = JSON.parse(localStorage.getItem(Storage_KEY) || "[]");
//         saveTexts.forEach((text) => addTextList(text));
//     });
// }

{
    // 상수 정의
    const STORAGE_KEY = "saveTexts";
    const EMPTY_ARRAY_JSON = "[]";

    // DOM 요소 선택 및 타입 지정
    const $form = document.querySelector("form");
    const $myText = document.querySelector("#myText");
    const $textList = document.querySelector(".textList");

    // 타입 가드 함수 (assertElement):
    // 이 함수는 타입 단언 함수(type assertion function)입니다.
    // asserts element is T는 TypeScript의 특별한 문법으로,
    // 이 함수가 성공적으로 실행되면 element가 T 타입임을 보장합니다.
    // 만약 element가 null이면 에러를 throw하고,
    // 그렇지 않으면 TypeScript는 이후 코드에서 element를 T 타입으로 취급합니다.
    function assertElement<T extends HTMLElement>(element: Element | null, selector: string): asserts element is T {
        //TypeScript의 타입 단언 함수 문법입니다.
        if (!element) {
            throw new Error(`Element with selector "${selector}" not found`);
        }
    }

    // DOM 요소 존재 확인
    assertElement<HTMLFormElement>($form, "form");
    assertElement<HTMLInputElement>($myText, "#myText");
    assertElement<HTMLUListElement>($textList, ".textList");

    // 타입 정의
    interface SavedText {
        text: string;
        timestamp: number;
    }

    // 유틸리티 함수
    const getSavedTexts = (): SavedText[] => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || EMPTY_ARRAY_JSON);
    };

    const addTextList = (textItem: SavedText): void => {
        const li = document.createElement("li");
        li.innerHTML = `- <span class="text">${textItem.text}</span> (${new Date(textItem.timestamp).toLocaleString()})`;
        $textList.prepend(li);
    };

    const saveToLocalStorage = (text: string): void => {
        const savedTexts = getSavedTexts();
        const newText: SavedText = { text, timestamp: Date.now() };
        savedTexts.push(newText);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTexts));
    };

    const handleSubmit = (e: Event): void => {
        e.preventDefault();
        const inputText = $myText.value.trim();

        if (inputText !== "") {
            const newText: SavedText = {
                text: inputText,
                timestamp: Date.now(),
            };
            addTextList(newText);
            $myText.value = "";
            $myText.focus();
            saveToLocalStorage(inputText);
        } else {
            console.log("값을 입력해주세요");
        }
    };

    $form.addEventListener("submit", handleSubmit);

    window.addEventListener("load", () => {
        const savedTexts = getSavedTexts();
        savedTexts.forEach(addTextList);
    });
}
