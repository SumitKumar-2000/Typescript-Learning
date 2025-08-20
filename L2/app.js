// UNION
function combine(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
console.log("sum: ", combine(10, "20"));
// LITERAL TYPES
// TYPE ALIAS / CUSTOM TYPES
