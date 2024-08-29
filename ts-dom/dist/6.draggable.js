"use strict";
{
    const $lists = document.querySelectorAll("#draggable-list > li");
    let isDragging = false;
    function moveList(target) {
        const $lists = Array.from(document.querySelectorAll("#draggable-list > li"));
        if (isDragging) return;
        isDragging = true;
        const dragOne = document.querySelector(".dragging");
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
        list.addEventListener("dragenter", (e) => moveList(e.target));
    });
}
