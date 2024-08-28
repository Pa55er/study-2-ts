"use strict";
{
    class Square2 {
        constructor(width, height, color) {
            this.width = Math.random() * (width - 10) + 10;
            this.height = Math.random() * (height - 10) + 10;
            this.color =
                typeof color === "string" && this.isValidCssColor(color)
                    ? color
                    : `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.random()})`;
        }
        draw() {
            let a = Math.random() * 400;
            let square = `
				<div style="
					width: ${this.width}px;
					height: ${this.height}px;
					background-color: ${this.color};
					position: absolute;
					top: ${a}px;
					left: ${a}px;
				"></div>
			`;
            document.body.insertAdjacentHTML("beforeend", square);
        }
        isValidCssColor(color) {
            const s = new Option().style;
            s.color = color;
            return s.color !== "";
        }
    }
    let square2 = new Square2(100, 100, "red");
    square2.draw();
    let square3 = new Square2(100, 100);
    square3.draw();
    let square4 = new Square2(100, 100, "#eaeaea");
    square4.draw();
    let square5 = new Square2(100, 100, "invalidColor");
    square5.draw();
}
