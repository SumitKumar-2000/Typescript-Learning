//! UNION
function combine(num1: number | string, num2: number | string){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}

console.log("sum: ", combine(10, "20"));

//! LITERAL TYPES - custom type with union
function combine1(num1: number | string, num2: number | string, conversionType: "as-string" | "as-number"){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}

console.log("sum: ", combine1(10, "20", "as-number"));

// TYPE ALIAS / CUSTOM TYPES

type log = string | number | boolean | string[];

function logType(item : log): log{
    return item
}

console.log(logType()) // incorrect
console.log(logType(12)) // correct
console.log(logType(false)) // correct
console.log(logType("hi there")) // correct
console.log(logType(["a", "b", "c"])) // correct

type User = {
    name: string;
    age: number;
    sub: string[];
}
const user: User = {
    name: "sk",
    age: 10,
    sub: ["a","b","c"],
}

function greet(user): User{
    return user
}

console.log(greet(user))
