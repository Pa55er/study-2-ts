{
    // class Square {
    //     constructor(
    //         public width: number,
    //         public height: number,
    //         public color: string
    //     ) {}

    //     draw() {
    //         let a = Math.random() * 400;
    //         let square = `
    // 			<div style="
    // 				width: ${this.width}px;
    // 				height: ${this.height}px;
    // 				background-color: ${this.color};
    // 				position: absolute;
    // 				top: ${a}px;
    // 				left: ${a}px;
    // 			"></div>
    // 		`;
    //         document.body.insertAdjacentHTML("beforeend", square);
    //     }
    // }

    // let square = new Square(30, 30, "red");
    // square.draw();

    class Square2 {
        private width: number;
        private height: number;
        private color: string;
        constructor(width: number, height: number, color?: string) {
            this.width = Math.random() * (width - 10) + 10;
            this.height = Math.random() * (height - 10) + 10;
            this.color =
                typeof color === "string" && this.isValidCssColor(color)
                    ? color
                    : `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
                          Math.random() * 256
                      )},${Math.floor(Math.random() * 256)},${Math.random()})`;
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

        isValidCssColor(color: string) {
            // Option 객체를 만들어 스타일 속성을 조작
            const s = new Option().style;

            // 주어진 color를 색상 값으로 설정
            s.color = color;

            // 설정된 색상이 빈 문자열이 아닌지 확인
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
