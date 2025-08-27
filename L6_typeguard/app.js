// TYPE GUARDS
function add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
console.log(add(30, 20));
console.log(add("30", 20));
var emp1 = {
    name: "sk",
    priviledge: ["create-server"],
    startDate: new Date()
};
var emp2 = {
    name: "rk",
    startDate: new Date()
};
function printEmployee(emp) {
    console.log(emp.name);
    // console.log(emp.startDate); -- no surity whether existing or not  ❌
    // console.log(emp.priviledge); -- no surity whether existing or not  ❌
    // adding type guards
    // if(typeof emp === "object"){} -- can't do type checkings on the basis of "object type"
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
    if ("priviledge" in emp) {
        console.log(emp.priviledge);
    }
}
printEmployee(emp1);
printEmployee(emp2);
//! 3. Type guard in functions
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Drive Car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Drive Truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Cargo: ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(300);
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(400);
    }
}
useVehicle(v1);
useVehicle(v2);
// type casting / assertion
