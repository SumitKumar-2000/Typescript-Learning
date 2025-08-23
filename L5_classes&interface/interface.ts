//! INTERFACE

// just like class, we can initialize a variable with value but in interface we can't
interface Member{
    name: string;
    age: number;
    greet(text:string): void; 
}

let user:Member = {
    name: "sk",
    age: 20,
    greet: function(text:string){
        console.log(`Hi there: ${text}`)
    }
}

interface greetable {
    name: string;
    readonly gid: number;
    greet(text:string): void;
}

class Person implements greetable{
    name: string;
    gid: number;

    constructor(n:string, id: number){
        this.name = n;
        this.gid = id;
    }

    greet(text: string): void {
        console.log(`${this.name}, ${text}, ${this.gid}`)
    }
}

const P1 = new Person("Amit",1);
P1.greet("Kya hal chal");



//! EXTENDING INTERFACE
interface Animal{
    name: string;
}

interface Behaviour extends Animal{
    action(tone: string): void;
}

//! INTERFACE WITH FUNCTION
interface addFun{
    (a:number, b:number):number
} 

let add: addFun = (n1: number, n2: number) =>{
    return n1 + n2;
}


//! OPTIONAL ?
interface Named{
    readonly name: string;
    outputname?: string;
}

class Person1 implements Named{
    name: string;
    outputname?: string | undefined;

    constructor(n: string, on: string){
        this.name = n;
        this.outputname = on;
    }
}




