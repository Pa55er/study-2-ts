"use strict";
{
    console.clear();
    let person3 = { name: "page", age: 5 };
    let { name, age } = person3;
    console.log(name, age);
    function print3(value) {
        if (typeof value === "number") {
            console.log(value.toFixed(2));
        }
        else {
            console.log(value.trim());
        }
    }
    print3(123.567);
    print3("안녕하세요");
}
