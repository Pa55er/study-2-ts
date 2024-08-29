{
    const $lists = document.querySelectorAll("#draggable-list > li") as NodeListOf<HTMLLIElement>;

    let isDragging = false;

    function moveList(target: HTMLLIElement) {
        const $lists = Array.from(document.querySelectorAll("#draggable-list > li")) as HTMLLIElement[];
        if (isDragging) return;
        isDragging = true;
        const dragOne = document.querySelector(".dragging") as HTMLLIElement;
        if (dragOne && dragOne !== target && target.tagName === "LI") {
            if ($lists.indexOf(target) < $lists.indexOf(dragOne)) {
                target.before(dragOne);
            } else {
                target.after(dragOne);
            }
        }
        isDragging = false;
    }

    $lists.forEach((list) => {
        list.addEventListener("dragstart", () => {
            list.classList.add("dragging");
        });

        list.addEventListener("dragend", () => {
            list.classList.remove("dragging");
        });

        list.addEventListener("dragenter", (e) => moveList(e.target as HTMLLIElement));
    });
}

// {
//     const getById = <T extends HTMLElement>(id: string): T => {
//         const $el = document.getElementById(id);
//         if (!$el) throw new Error("해당 요소는 존재하지 않습니다.");
//         return $el as T;
//     };
//     const $draggableList = getById<HTMLUListElement>("draggable-list");
//     let selected: HTMLLIElement | null = null;

//     const toggleDragging = ($target: HTMLLIElement, state: boolean) => {
//         $target.classList.toggle("dragging", state);
//         selected = state ? $target : null;
//     };

//     $draggableList.addEventListener("dragstart", (event) => {
//         const { target } = event;
//         if (target instanceof HTMLLIElement) {
//             toggleDragging(target, true);
//         }
//     });
//     $draggableList.addEventListener("dragover", (event) => {
//         const { target } = event;
//         if (target === selected || !(target instanceof HTMLLIElement)) {
//             return;
//         }
//         const { clientY } = event;
//         const { top, height } = target.getBoundingClientRect();
//         // dragover 상태 = selected가 무조건!! 존재하기 때문에 `!`
//         if (clientY > top + height / 2) {
//             target.after(selected!);
//         } else {
//             target.before(selected!);
//         }
//     });
//     $draggableList.addEventListener("dragend", (event) => {
//         const { target } = event;
//         if (target instanceof HTMLLIElement) {
//             toggleDragging(target, false);
//         }
//     });
// }
