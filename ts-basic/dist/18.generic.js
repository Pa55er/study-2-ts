"use strict";
{
    console.clear();
    function print4(target) {
        return target.length;
    }
    let sample22 = print4("test test test");
    let sample23 = print4([1, 2, 3, 4, 5, 6]);
    console.log(sample22);
    console.log(sample23);
    let data = '{"name": "somy", "age":20}';
    function print5(target) {
        return JSON.parse(target);
    }
    let sample24 = print5(data);
    console.log(sample24);
}
