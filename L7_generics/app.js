//! GENERICS
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var students = [
    { name: "sk", age: 2 },
    { name: "rk", age: 3 },
];
// GENERICS IN Function
function merge(obj1, obj2, obj3) {
    return __assign(__assign(__assign({}, obj1), obj2), obj3);
}
var res = merge({ name: "patel" }, { role: "software engineer" }, { id: 2 });
console.log(res);
// GENERICS CONSTRAINT
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
createObject("age", 25, true);
var numBox = { value: 23 };
var stringBox = { value: { top: "goods" } };
var userA = { data: "data", status: 200 };
var jsonRes = { data: { key: "value" }, status: 200 };
// Generic Class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
console.log(stringContainer.getContent());
var numberContainer = new Container(1820);
console.log(numberContainer.getContent());
// GENERICS with string
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b"]));
