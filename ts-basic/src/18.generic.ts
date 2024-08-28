{
    console.clear();

    // function print1<T>(message: T): T {
    //     return message;
    // }
    // let sample18 = print1<string>("test");
    // console.log(sample18);
    // let sample19 = print1<number>(2);
    // console.log(sample19);

    // function print2<T extends number>(x: T) {
    //     return x - 1;
    // }
    // let sample20 = print2<number>(100);
    // console.log(sample20);

    // interface Length {
    //     length: number;
    // }
    // function print3<T extends Length>(array: T) {
    //     return array.length;
    // }
    // let sample21 = print3<number[]>([1, 2, 3]);
    // console.log(sample21);

    function print4<T extends string | number[]>(target: T) {
        return target.length;
    }
    let sample22 = print4<string>("test test test");
    let sample23 = print4<number[]>([1, 2, 3, 4, 5, 6]);
    console.log(sample22);
    console.log(sample23);

    interface User {
        name: string;
        age: number;
    }
    let data = '{"name": "somy", "age":20}'; // JSON
    function print5<T>(target: string): T {
        return JSON.parse(target);
    }
    let sample24 = print5<User>(data);
    console.log(sample24);
}
