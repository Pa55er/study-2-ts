"use strict";
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(`안녕하세요, ${this.name}입니다.`);
        }
    }
    new Person("somy", 2).sayHello();
}
