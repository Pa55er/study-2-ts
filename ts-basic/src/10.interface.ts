{
    console.clear();

    type Square = {
        color: string;
        sideLength: number;
    };

    let square: Square = {
        color: "blue",
        sideLength: 10,
    };
    console.log(square);

    // interface
    interface Square2 {
        color: string;
        sideLength: number;
    }
    let square2: Square2 = {
        color: "blue",
        sideLength: 10,
    };
    console.log(square2);

    // 학생 - name, score
    // 선생님 - name, subject
    interface Student {
        name: string;
    }
    interface Teacher extends Student {
        subject: string;
    }
    let student: Student = { name: "학생" };
    let teacher: Teacher = { name: "선생님", subject: "산수" };
    console.log(student, teacher);

    // type alias & (intersection)
    type Animal = { name: string };
    // 복사의 개념은 아님. 둘다 만족 시켜야함.
    type Dog = Animal & { bark: string };
    let dog: Dog = { name: "멍멍이", bark: "멍멍" };
    console.log(dog);

    // interface는 중복 선언이 가능.
    interface Person {
        name: string;
        age: number;
    }
    interface Person {
        score: number;
    }
    let person: Person = { name: "somy", age: 2, score: 100 };
    console.log(person);

    // 배열
    interface ShopCart {
        product: string;
        price: number;
    }
    interface NewCart extends ShopCart {
        card?: boolean;
    }
    let shopCart: NewCart[] = [
        { product: "청소기", price: 10000 },
        { product: "물", price: 800 },
        { product: "간식", price: 3000 },
    ];
    console.log(shopCart);

    //
    interface Object {
        plus: (a: number, b: number) => number;
        minus: (a: number, b: number) => number;
    }
    let object: Object = {
        plus: (a, b) => a + b,
        minus: (a, b) => a - b,
    };
    console.log(object.plus(1, 2)); // 3
    console.log(object.minus(3, 1)); // 2
}
