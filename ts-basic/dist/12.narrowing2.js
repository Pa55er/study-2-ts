"use strict";
{
    function print(a) {
        if (typeof a === "undefined") {
            return;
        }
        else {
            console.log(a);
        }
    }
    print("abc");
    function print2(a) {
        if (a && typeof a === "string") {
            console.log(a);
        }
    }
    print2("abc");
    function move(animal) {
        if ("swim" in animal) {
            console.log(animal.swim);
        }
        else {
            console.log(animal.fly);
        }
    }
    move({ swim: "swim" });
    class Animal {
        makeSound() {
            console.log("소리를 내어라");
        }
    }
    class Dog extends Animal {
        bark() {
            console.log("멍멍");
        }
    }
    class Cat extends Animal {
        meow() {
            console.log("에옹~");
        }
    }
    const dog = new Dog();
    const cat = new Cat();
    const animal = new Animal();
    function makeSound(a) {
        if (a instanceof Dog) {
            a.bark();
        }
        else if (a instanceof Cat) {
            a.meow();
        }
        else {
            a.makeSound();
        }
    }
    makeSound(dog);
    makeSound(cat);
    makeSound(animal);
    function printLoginState(state) {
        if (state.result === "success") {
            console.log(state.response.body);
        }
        else {
            console.log(state.reason);
        }
    }
    printLoginState({ result: "success", response: { body: "logged in" } });
    printLoginState({ result: "fail", reason: "비번오류" });
}
