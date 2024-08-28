{
    console.clear();

    type Myfn = (a: number, b: number) => number;
    let add: Myfn = (a, b) => a + b;
    console.log(add(10, 20));

    type Myfn2 = { (a: number, b: number): number };
    let add2: Myfn2 = (a, b) => a + b;
    console.log(add2(10, 20));

    interface Myfn3 {
        (a: number, b: number): string;
    }
    let add3: Myfn3 = (a, b) => (a + b).toString();
    console.log(add3(10, 20));

    // 더 이상 사용하지 않음.
    // type Myfn4 = function name(params: type) {}
}
