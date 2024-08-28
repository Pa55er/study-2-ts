{
    console.clear();

    // function add(a: number, b: number): number {
    //     return a + b;
    // }
    // console.log(add(10, 20));

    // function sayHello(name: string): void {
    //     console.log(`Hello ${name}`);
    // }
    // sayHello("somy");

    // function log(a: string, b?: string, c?: string) {
    //     console.log(a, b, c);
    // }
    // log("hello");
    // log("hello", "world");

    // function print2(x: number | string) {
    //     // console.log(x + 3);
    //     if (typeof x === "number") {
    //         console.log(x + 3);
    //     } else {
    //         console.log(x);
    //     }
    // }
    // print2(3);
    // print2("test");

    //
    function getLength(target: string | null): number | string {
        if (target === null) return "비었음";
        else return target.length;
    }
    console.log(getLength("test")); // 4
    console.log(getLength(null)); // "비었음"
}
