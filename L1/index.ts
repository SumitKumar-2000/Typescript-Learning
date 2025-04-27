// Object, Array, Tuple, Enum

// !OBJECT
// var person : {
//     age: number;
//     firstName: string;
//     isStudent: boolean;
// } = {
//     age: 21,
//     firstName: "sk",
//     isStudent: true
// }

// !ARRAY
var person2 : {
    age: number;
    firstName: string;
    isStudent: boolean;
    subjects: string[];
} = {
    age: 21,
    firstName: "sk",
    isStudent: true,
    subjects: ["maths","english","hindi"]
}


// TUPLE - fixed size array
var person3 : {
    age: number;
    firstName: string;
    isStudent: boolean;
    project: [number, string];
} = {
    age: 21,
    firstName: "sk",
    isStudent: true,
    project: [1,"hindi"]
}

// person3.project[1] = "eng"   // correct
// person3.project[1] = 3   // wrong

let favouriteSubjects1 : string[];
let favouriteSubjects2 : any[]; // loose ts features
// favouriteSubjects = 0;   // wrong
// favouriteSubjects = []   // correct
favouriteSubjects2 = ["1",2,"3",true]

// console.log(person.lastname);


//! ENUM

enum Role {ADMIN, AUTHOR, READ_ONLY_USER}

const person4 = {
    name: "patel",
    age: 21,
    skills: ["React","Node"],
    product: [10, "twenty"],
    role: Role.ADMIN
}

if(person4.role ===  Role.ADMIN){
    console.log("Admin");
} else if(person4.role ===  Role.AUTHOR){
    console.log("Author"); 
} else {
    console.log("Read only user"); 
}