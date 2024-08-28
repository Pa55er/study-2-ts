"use strict";
{
    console.clear();
    class User {
        constructor(name) {
            this.familyName = "park";
            this.name = name;
            console.log(this.familyName + " " + this.name);
        }
        changeFamilyName(newName) {
            this.familyName = newName;
        }
    }
    let user = new User("somy");
    console.log(user);
    user.changeFamilyName("kim");
    console.log(user);
    class Position {
        constructor() {
            this.x = 0;
        }
    }
    class NewPosition extends Position {
        constructor() {
            super(...arguments);
            this.y = 0;
        }
        doSomething() {
            this.x = 10;
            console.log(this.x);
        }
    }
    let sample = new NewPosition();
    sample.doSomething();
    class StaticPosition {
        constructor() {
            this.y = 40;
        }
    }
    StaticPosition.x = 30;
    let staticSample = new StaticPosition();
    console.log(staticSample);
    console.log(StaticPosition.x);
}
