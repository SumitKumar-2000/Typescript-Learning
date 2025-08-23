"use strict";
//! INTERFACE
let user = {
    name: "sk",
    age: 20,
    greet: function (text) {
        console.log(`Hi there: ${text}`);
    }
};
class Person {
    constructor(n, id) {
        this.name = n;
        this.gid = id;
    }
    greet(text) {
        console.log(`${this.name}, ${text}, ${this.gid}`);
    }
}
const P1 = new Person("Amit", 1);
P1.greet("Kya hal chal");
let add = (n1, n2) => {
    return n1 + n2;
};
class Person1 {
    constructor(n, on) {
        this.name = n;
        this.outputname = on;
    }
}
