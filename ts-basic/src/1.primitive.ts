// 전역에 변수를 선언하는 것을 피하자.
// let nametest: string = "Somy";
// console.log(nametest);

{
    console.clear();

    let name: string = "test";
    name = "test1";
    console.log(name);
    const fullName = "Somya";
    console.log(fullName);

    let age = 25;
    console.log(age);

    let isDone = false;
    console.log(isDone);

    // let name1: undefined = undefined;
    // let name2: null = null;
    let name3: undefined | null;

    name3 = undefined;
    name3 = null;
    console.log(name3);

    let list1: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];
    let list3: (string | number)[] = [1, 2, 3, "4", "5"];
    console.log(`예제2: ${list1}, ${list2}, ${list3}`);

    let person: {
        name: string;
        age: number;
    } = {
        name: "Soyma",
        age: 2,
    };
    console.log(person);
}
