//! GENERICS

interface Boy {
    name: string;
    age: number
}

const students : Array<Boy> = [
    {name: "sk", age: 2},
    {name: "rk", age: 3},
]


// GENERICS IN Function
function merge<T, U, V>(obj1:T, obj2:U, obj3:V){
    return {...obj1, ...obj2, ...obj3}
}

const res = merge({name: "patel"}, {role: "software engineer"}, {id: 2})
console.log(res)


// GENERICS CONSTRAINT
function createObject<T extends string, U extends number, V extends boolean>(key: T, value: U, isActive: V) : {key: T, value: U, isActive: V}{
    return { key, value, isActive}
}

createObject("age", 25, true);


// GENERICS Interface
interface Box<T>{
    value: T
}

const numBox : Box<number> = {value: 23};
const stringBox : Box<{top: string}> = {value: {top: "goods"}};

// Default Generic
interface User<T= string>{
    data: T;
    status: number;
}

const userA : User = {data: "data", status: 200}
const jsonRes : User<object> = {data: {key: "value"}, status: 200}


// Generic Class
class Container<T>{
    private content: T;
    constructor(content: T){
        this.content = content;
    }

    getContent():T{
        return this.content
    }
}

const stringContainer = new Container<string>("Hello") 
console.log(stringContainer.getContent());
const numberContainer = new Container<number>(1820);
console.log(numberContainer.getContent()); 


// GENERICS with string
function getFirst<T>(arr: T[]) : T {
    return arr[0]
}

console.log(getFirst([1,2,3]));
console.log(getFirst(["a","b"]));


// GENERICS with keyof

// -- the code below will give error as the obj as no key roll
// function getProperty(obj: object, key: string){
//     return obj[key];
// }

// getProperty({}, "roll");

function getProperty<T extends object, U extends keyof T>(obj: T, key: U) : T[U]{
    return obj[key];
}

const person = {name: "patel", age: 23};
const personName = getProperty(person, "name");
const age = getProperty(person, "age")
console.log(personName, age)