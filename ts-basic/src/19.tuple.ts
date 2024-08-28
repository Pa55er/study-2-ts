{
    console.clear();

    // let arr1: number[] = [1, 2, 3, 4, 5, 6];
    // let arr2: string[] = ["a", "b", "c", "d", "e"];
    // let arr3: (number | string)[] = [1, "a"];
    // console.log(arr1, arr2, arr3);

    // Tuple
    // let arr4: [number, string?, boolean?] = [1, "a"];

    //
    // function myFn1(...rest: [string, number, boolean, ...number[]]) {
    //     console.log(rest);
    // }
    // myFn1("test", 1, true, 4, 5, 6, 7, 8);

    //
    // myFn2('test',5,6,'d',7,8,9,'A')를 호출하면
    // [['test','d','A'],[5,6,7,8,9]]를 출력하는 함수를 작성하시오.
    function myFn2(...rest: (string | number)[]) {
        const result: [string[], number[]] = [[], []];
        rest.forEach((ele) =>
            typeof ele === "string" ? result[0].push(ele) : result[1].push(ele)
        );
        return result;
    }
    console.log(myFn2("test", 5, 6, "d", 7, 8, 9, "A"));
}
