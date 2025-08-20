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

// PRIVATE, PUBLIC Access Modifiers
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
        // this.id = "asdf" :: can't do this as readonly value can't be modified
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

