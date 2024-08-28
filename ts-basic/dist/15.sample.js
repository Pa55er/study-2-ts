"use strict";
{
    console.clear();
    class Counter {
        constructor() {
            Counter.count++;
        }
        static getCount() {
            return Counter.count;
        }
        getId() {
            return Counter.count;
        }
    }
    Counter.count = 0;
    const counter1 = new Counter();
    console.log(counter1.getId());
    console.log(Counter.getCount());
    const counter2 = new Counter();
    console.log(counter2.getId());
    console.log(Counter.getCount());
}
