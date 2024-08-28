{
    function print(a: string | undefined) {
        if (typeof a === "undefined") {
            return;
        } else {
            console.log(a);
        }
    }
    print("abc");

    //2
    function print2(a: string | undefined) {
        if (a && typeof a === "string") {
            console.log(a);
        }
    }
    print2("abc");

    //3
    type Fish = { swim: string };
    type Bird = { fly: string };
    function move(animal: Fish | Bird) {
        if ("swim" in animal) {
            console.log(animal.swim);
        } else {
            console.log(animal.fly);
        }
    }
    move({ swim: "swim" });

    //4
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

    function makeSound(a: Animal) {
        if (a instanceof Dog) {
            a.bark();
        } else if (a instanceof Cat) {
            a.meow();
        } else {
            a.makeSound();
        }
    }
    makeSound(dog);
    makeSound(cat);
    makeSound(animal);

    //
    type SuccessState = {
        result: "success";
        response: {
            body: string;
        };
    };
    type FailState = {
        result: "fail";
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function printLoginState(state: LoginState) {
        if (state.result === "success") {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
    printLoginState({ result: "success", response: { body: "logged in" } });
    printLoginState({ result: "fail", reason: "비번오류" });
}
