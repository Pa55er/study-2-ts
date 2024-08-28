{
    console.clear();

    // function print(target: number | string) {
    //     let array: number[] = [];
    //     if (typeof target === "number") {
    //         array.push(target);
    //         console.log(array);
    //     } else console.log(target.trim());
    // }
    // print(123); //[123]
    // print("  안녕하세요  "); // "안녕하세요"

    //
    // function cleanArray(target: (number | string)[]): void {
    //     let a: number[] = [];
    //     let b: string[] = [];
    //     target.forEach((element) => {
    //         if (typeof element === "number") a.push(element);
    //         else b.push(element);
    //     });
    //     console.log("number [] ---", a);
    //     console.log("stirng [] ---", b);
    // }
    // cleanArray([1, "a", 3, "4", "5", 6, 7]);

    // 타입 단언
    // <> as
    let sample: any = "this is a string";
    let length2 = (<string>sample).length; // 예전 방식
    let length1 = (sample as string).length;
    console.log(length2);
    console.log(length1);
}
