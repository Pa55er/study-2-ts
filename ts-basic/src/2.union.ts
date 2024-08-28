{
    console.clear();

    // let sample: string | number | boolean = "test";
    // sample = 10;
    // sample = true;
    // console.log(sample);

    // type Direction = "left" | "right" | "top" | "bottom";
    // function move(direction: Direction) {
    //     console.log(direction);
    // }
    // move("left");

    // let arry: (number | string)[] = [1, "2", 3, "4", 5];
    // let arry2: number | string[];
    // arry2 = 2;
    // arry2 = ["1", "2", "3", "4", "5"];
    // console.log(arry2);

    // let notSure: any = 4;
    // notSure = "test";
    // notSure = true;
    // console.log(notSure);

    // let nuko: unknown = 4;
    // nuko = "test";
    // nuko = true;
    // console.log(nuko);

    let union: string | number = 1;
    console.log(union + 1);
    union = "1";
    console.log(union + 1);

    let union2: string | number;
    union2 = 1;
    console.log(union2 + 1);

    //
    let student: {
        score: (number | boolean)[];
        teacher: string;
        friend: string | string[];
    } = {
        score: [100, 90, 50],
        teacher: "Somya",
        friend: "john",
    };
    console.log(student);
}
