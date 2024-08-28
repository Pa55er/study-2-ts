{
    console.clear();

    // ...rest []
    function myfn1(f: number, s: number, ...args: number[]) {
        console.log(f);
        console.log(s);
        console.log(args);
    }
    myfn1(1, 2, 3, 4, 5);

    // 구조분할
    type Person = {
        student: boolean;
        age: number;
    };
    let person = {
        student: true,
        age: 5,
    };

    function myFn3({ student, age }: Person) {
        console.log(student, age);
    }

    myFn3(person);

    // maxReturn(6,8,50,9,20,100,5) //100
    function maxReturn(...args: number[]) {
        return args.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
    }
    console.log(maxReturn(6, 8, 50, 9, 20, 100, 5));

    type User = {
        user: string;
        comment: number[];
        admin: boolean;
    };
    function myFn4({ user, comment, admin }: User) {
        console.log(user, comment, admin);
    }
    myFn4({ user: "kim", comment: [3, 4, 5], admin: false });

    type MyArray = [number, string, boolean];
    function myFn5([n, s, b]: MyArray) {
        console.log(n, s, b);
    }
    myFn5([50, "wine", false]);
}
