"use strict";
{
    console.clear();
    function myfn1(f, s, ...args) {
        console.log(f);
        console.log(s);
        console.log(args);
    }
    myfn1(1, 2, 3, 4, 5);
    let person = {
        student: true,
        age: 5,
    };
    function myFn3({ student, age }) {
        console.log(student, age);
    }
    myFn3(person);
    function maxReturn(...args) {
        return args.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
    }
    console.log(maxReturn(6, 8, 50, 9, 20, 100, 5));
    function myFn4({ user, comment, admin }) {
        console.log(user, comment, admin);
    }
    myFn4({ user: "kim", comment: [3, 4, 5], admin: false });
    function myFn5([n, s, b]) {
        console.log(n, s, b);
    }
    myFn5([50, "wine", false]);
}
