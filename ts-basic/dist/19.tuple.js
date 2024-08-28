"use strict";
{
    console.clear();
    function myFn2(...rest) {
        const result = [[], []];
        rest.forEach((ele) => typeof ele === "string" ? result[0].push(ele) : result[1].push(ele));
        return result;
    }
    console.log(myFn2("test", 5, 6, "d", 7, 8, 9, "A"));
}
