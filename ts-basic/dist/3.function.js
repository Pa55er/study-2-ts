"use strict";
{
    console.clear();
    function getLength(target) {
        if (target === null)
            return "비었음";
        else
            return target.length;
    }
    console.log(getLength("test"));
    console.log(getLength(null));
}
