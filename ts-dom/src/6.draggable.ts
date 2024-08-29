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
