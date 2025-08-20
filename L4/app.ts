let userInput: unknown;
let test: any;
let userName: string;

userName = userInput     // will give error for unknown type
userName = test   // will not give error for any type


// never return type - if function is throwing error 
function generateError(message: string, code: number) : never{
    throw {message, code};
}

const res = generateError("Internal server error", 500);
console.log("res: ", res)
