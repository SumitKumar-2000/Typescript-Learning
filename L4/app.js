var userInput;
var test;
var userName;
userName = userInput; // will give error for unknown type
userName = test; // will not give error for any type
// never return type - if function is throwing error 
function generateError(message, code) {
    throw { message: message, code: code };
}
var res = generateError("Internal server error", 500);
console.log("res: ", res);
