"use strict";
{
    console.clear();
    let square = {
        color: "blue",
        sideLength: 10,
    };
    console.log(square);
    let square2 = {
        color: "blue",
        sideLength: 10,
    };
    console.log(square2);
    let student = { name: "학생" };
    let teacher = { name: "선생님", subject: "산수" };
    console.log(student, teacher);
    let dog = { name: "멍멍이", bark: "멍멍" };
    console.log(dog);
    let person = { name: "somy", age: 2, score: 100 };
    console.log(person);
    let shopCart = [
        { product: "청소기", price: 10000 },
        { product: "물", price: 800 },
        { product: "간식", price: 3000 },
    ];
    console.log(shopCart);
    let object = {
        plus: (a, b) => a + b,
        minus: (a, b) => a - b,
    };
    console.log(object.plus(1, 2));
    console.log(object.minus(3, 1));
}
