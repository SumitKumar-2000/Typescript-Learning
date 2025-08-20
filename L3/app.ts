// FUNCTIONS

//! FUNCTION Return type
function add(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(add(1,2));

function greet(statement: string): void{
    console.log(statement)
}

// When assigining a function to a variable

// ---- bad way -----
// let combineFunction : Function;

// combineFunction = "asdf"             --- ❌
// combineFunction = 20             --- ❌
// combineFunction = add(1,2);             --- ❌
// combineFunction = function(){};             --- ✅
// combineFunction = add;             --- ✅

// ---- good way ----
let combineFunction : (a: number, b: number) => number;

// combineFunction = add      --- ✅
// combineFunction = greet      --- ❌


// Function type and callback

type CB = (n: number) => void;
function addHandle(n1: number, n2: number, cb: CB): void{
    const result = n1 + n2;
    cb(result)
}

addHandle(2,3,(result: number) => {
    console.log("result: ", result)
})