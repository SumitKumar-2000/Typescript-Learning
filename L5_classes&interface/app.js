"use strict";
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
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
const accountCopying = {
    name: 'Copying',
    describe: accounting.describe,
};
accountCopying.describe();
// PRIVATE, PUBLIC Access Modifiers
class Department2 {
    constructor(name, did, employees) {
        this.name = name;
        this.employees = employees;
        // name: string;
        // employees: string[];
        this.id = "";
        this.id = did;
        // this.name = n;
        // this.employees = [];
    }
    describe() {
        // this.id = "asdf" :: can't do this as readonly value can't be modified
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees, this.id, this.name);
    }
}
const dept2 = new Department2("engineering", "eng", []);
dept2.describe();
dept2.addEmployee("rahul");
dept2.printEmployees();
