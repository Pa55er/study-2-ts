{
    console.clear();

    class Counter {
        private static count = 0;

        constructor() {
            Counter.count++;
        }

        public static getCount() {
            return Counter.count;
        }

        public getId() {
            return Counter.count;
        }
    }
    const counter1 = new Counter();
    console.log(counter1.getId());
    console.log(Counter.getCount());
    const counter2 = new Counter();
    console.log(counter2.getId());
    console.log(Counter.getCount());
}
