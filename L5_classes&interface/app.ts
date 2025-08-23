/*
    IMPORTANT:

    for watch mode - tsc <file name> --watch
    for compile - tsc <file name>
    to compile multiple files - tsc --init -> tsc --watch
    to exclude a file from compilation, add it to tsconfig.json under "exclude" array
    to include a file, add it to tsconfig.json under "include" array
*/ 


/* ----  Classes & Interfaces ---- */ 


//! BASIC CLASS 
class Department {
    name: string;
    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountCopying = {
    name: 'Copying',
    describe: accounting.describe,
}

accountCopying.describe();




//! PRIVATE, PUBLIC Access Modifiers (ENCAPSULATION)
class Department2 {
    // name: string;
    // employees: string[];
    private readonly id: string = ""
    constructor(public name: string, did: string, private employees: string[]) {
        this.id = did
        // this.name = n;
        // this.employees = [];
    }

    describe(this: Department) {
        // *this.id = "asdf" :: can't do this as readonly value can't be modified*
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees(){
        console.log(this.employees, this.id, this.name)
    }
}

const dept2 = new Department2("engineering","eng", []);
dept2.describe();
dept2.addEmployee("rahul");
dept2.printEmployees();



//! INHERITANCE
//! Overide Properties & Protected Access Modifiers
//! Setter & Getter Method
//! static method 
class Department3 {
    constructor(public name: string, protected employees: string[]) {}

    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees(){
        return this.employees
    }
}

class AccountingDepartment extends Department3{
    constructor(private readonly id: number, private reports: string[] = []){
        super("Accounting", ["e1", "e2"]);
    }

    set addReport(report: string){
        if(!report) throw new Error("Invalid Value")
        this.reports.push(report);
    }

    get getReports(): string[] {
        if(this.reports.length > 0) return this.reports;
        throw new Error("Add atleast one report")
    }

    printReport(){
        console.log(`reports for ${this.id}: `, this.reports)
    }

    addEmployee(employee: string): void {
        if(!employee.includes("acc")) return
        this.employees.push(employee);
    }

    // *for static method no need to create new object instance*
    static getSalary(){
        return 50000;
    }
}

const accDept = new AccountingDepartment(1,["r1","r2"])
accDept.printReport();
accDept.describe();

accDept.addEmployee("e3");
console.log("after adding e3: ", accDept.printEmployees());

accDept.addEmployee("acc_e4");
console.log("after adding acc_e4: ", accDept.printEmployees());

// getter & setter 
accDept.addReport = "bugs";
accDept.addReport = "code review error";
console.log("reports: ", accDept.getReports)

// static method call - no need to create class object instance
const salary = AccountingDepartment.getSalary()
console.log("salary: ", salary)




//! ABSTRACTION
abstract class Department4{
    name:string;
    protected employees:string[] = [];
    protected readonly id:number;

    constructor(n: string, id: number){
        this.name = n;
        this.id = id;
    }

    abstract display(): void  // no implementation takes place for abstract method
} 

abstract class Shape {
  abstract area(): number; // sirf contract (implementation nahi)

  describe(): void {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  // compulsory implement karna padega
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

// const s = new Shape(); ❌ Error: Cannot create an instance of abstract class
const c = new Circle(5);
console.log(c.area()); // 78.5
const r = new Rectangle(10, 5);
console.log(r.area()); // 50


