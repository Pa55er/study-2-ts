{
    console.clear();

    // interface IPerson {
    //     [key: string]: string;
    // }

    // let user: IPerson = {
    //     name: "Jack",
    //     age: "32",
    //     location: "USA",
    //     0: "zero",
    //     1: "one",
    // };
    // console.log(user.name);
    // console.log(user.age);
    // console.log(user["0"]);
    // console.log(user[0]);

    //
    type TreeNode = {
        value: number;
        left?: TreeNode;
        right?: TreeNode;
    };
    const tree: TreeNode = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4 },
            right: { value: 5 },
        },
        right: {
            value: 3,
        },
    };
    console.log(tree);
}
