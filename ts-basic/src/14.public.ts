{
    console.clear();

    // public, private
    class User {
        private familyName: string = "park";
        name: string;
        constructor(name: string) {
            this.name = name;
            console.log(this.familyName + " " + this.name);
        }
        changeFamilyName(newName: string) {
            this.familyName = newName;
        }
    }

    let user = new User("somy");
    // console.log(user.familyName);
    console.log(user);
    user.changeFamilyName("kim");
    console.log(user);

    // protected
    class Position {
        protected x = 0;
    }
    class NewPosition extends Position {
        y = 0;
        doSomething() {
            this.x = 10; // 접근 가능
            console.log(this.x);
        }
    }
    let sample = new NewPosition();
    // console.log(sample.x);
    sample.doSomething();

    // static
    class StaticPosition {
        static x = 30;
        y = 40;
    }
    let staticSample = new StaticPosition();
    console.log(staticSample);
    console.log(StaticPosition.x);

    // class StaticPosition2 {
    //     protected static x = 30;
    //     y = 40;
    // }
}
