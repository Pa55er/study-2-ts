{
    console.clear();

    // 타입 추론
    // 변수 초기화

    // let a = 10;
    // let b = "test";
    // let c = true;
    // console.log(a, b, c);

    // 배열
    // let fruits = ["apple", "banana", "cherry"];
    // console.log(fruits);

    // 객체
    // let person = { name: "이름", age: 20 };
    // console.log(person);

    // function getPerson() {
    //     return { name: "sdfjskljfkls", age: 25 };
    // }
    // let person2 = getPerson();
    // console.log(person2);

    //화살표 함수
    // const add = (a: number, b: number) => a + b;

    // 제네릭 <T>
    // function identity<T>(arg: T): T {
    //     return arg;
    // }

    // let output1 = identity("myString");
    // let output2 = identity(33);
    // console.log(output1);
    // console.log(output2);

    // 구조분해 할당
    let person3 = { name: "page", age: 5 };
    let { name, age } = person3;
    console.log(name, age);

    // narrowing
    function print3(value: number | string) {
        if (typeof value === "number") {
            console.log(value.toFixed(2));
        } else {
            console.log(value.trim());
        }
    }
    print3(123.567);
    print3("안녕하세요");
}
