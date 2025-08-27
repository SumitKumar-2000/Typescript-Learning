// TYPE GUARDS

//! 1. Type Guards
type Numeric = number | boolean;
type Combinable = string | number;
type Universal = Combinable & Numeric;

function add(n1: Combinable, n2: Combinable){
    if(typeof n1 === "string" || typeof n2 === "string"){
        return n1.toString() + n2.toString();
    }

    return n1 + n2;
}

console.log(add(30, 20));
console.log(add("30", 20));


//! 2. Type guard in functions
type Admin = {
    name: string;
    priviledge: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

const emp1 : ElevatedEmployee = {
    name : "sk",
    priviledge: ["create-server"],
    startDate: new Date()
}

const emp2 : UnknownEmployee = {
    name: "rk",
    startDate: new Date()
}

function printEmployee(emp: UnknownEmployee): void{
    console.log(emp.name);
    // console.log(emp.startDate); -- no surity whether existing or not  ❌
    // console.log(emp.priviledge); -- no surity whether existing or not  ❌

    // adding type guards
    // if(typeof emp === "object"){} -- can't do type checkings on the basis of "object type"

    if("startDate" in emp) {
        console.log(emp.startDate);
    }

    if("priviledge" in emp){
        console.log(emp.priviledge);
    }
}


printEmployee(emp1);
printEmployee(emp2);


//! 3. Type guard in functions

class Car{
    drive(){
        console.log("Drive Car...");
    }
}

class Truck{
    drive(){
        console.log("Drive Truck...");
    }

    loadCargo(amount: number){
        console.log(`Cargo: `, amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();

    if("loadCargo" in vehicle){
        vehicle.loadCargo(300)
    }
    
    if(vehicle instanceof Truck){
        vehicle.loadCargo(400)
    }
}

useVehicle(v1);
useVehicle(v2);


// type casting / assertion

//! role = “I know this value is not null or undefined, so don’t complain about it.”
const userInput1 = <HTMLInputElement>document.getElementById("user-input")!;  
const userInput2 = document.querySelector("#user-input") as HTMLInputElement;

userInput1.value;
userInput2.value;