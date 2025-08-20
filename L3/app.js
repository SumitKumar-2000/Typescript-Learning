// FUNCTIONS
//! FUNCTION Return type
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function greet(statement) {
    console.log(statement);
}
// When assigining a function to a variable
// ---- bad way -----
// let combineFunction : Function;
// combineFunction = "asdf"             --- ❌
// combineFunction = 20             --- ❌
// combineFunction = add(1,2);             --- ❌
// combineFunction = add;             --- ✅
// ---- good way ----
var combineFunction;
// combineFunction = add      --- ✅
// combineFunction = greet      --- ❌
// Function type and callback
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandle(2, 3, function (result) {
    console.log("result: ", result);
});
