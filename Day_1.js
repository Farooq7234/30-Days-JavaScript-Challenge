// Day 1: Variables and Data Types

// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, log the value to the console


var num = 10;
console.log(num)


// Task 2: Declare a variable using let, assign it a string, and log the value to the console

let myName = "Farooq";
console.log(myName)


// Activity 2: Constant Declaration

// Task  3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const language = "JavaScript";
console.log(language)


// Activity 3: Data Types 


// Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator

const numVal = 12;
const stringVal = "string";
const boolVal = true;
const objVal = {
    name: "Farooq",
    language: "JavaScript"
};

const arrVal = [1, 2, 3, 4, 5];

console.log(`
type of numVal: ${typeof (numVal)}
type of stringVal: ${typeof (stringVal)}
type of boolVal: ${typeof (boolVal)}
type of objVal: ${typeof (objVal)}  
type of arrVal: ${typeof (arrVal)}`
)


// Activity 4 : Reassiging variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.assert

let msg = "Good Morning";
msg = "Good Night"
console.log(msg)

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared wit const and observe the error

const memories = "school life is best"
// memories = "college life is best"
// console.log(memories) //TypeError: Assignment to constant variable.


// Overall Output
/*10
Farooq
JavaScript

type of numVal: number
type of stringVal: string
type of boolVal: boolean
type of objVal: object 
type of arrVal: object
Good Night*/





