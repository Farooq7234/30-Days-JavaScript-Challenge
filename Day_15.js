// Day 15 Closure in JavaScript

// Activity 1: Understanding closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. call the inner function and log the result

function outerFunction() {
    let outerVal = 12;
    return function innerFunction() {
        console.log(outerVal)
    }
}
const inner = outerFunction()
console.log(inner())

// Output:
// 12
// undefined

// Task 2: create a closure that maintains a private counter. implement functions to increment and get the current value for the counter

function createCounter() {
    let count = 0;

    return {
        increment (){
            return count ++ 
        },
        getCount(){
            return count
        }
    }
}


const counter = createCounter() 
console.log(counter.increment()) // 0
console.log(counter.increment()) // 1
console.log(counter.getCount()) // 2

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call

function uniqueIDGenerator() {
    let lastId = 0;

    return function () {
        lastId ++;
        return lastId;
    }
}

const generatedId = uniqueIDGenerator()
console.log(`the generated id is: ${generatedId()}`) // the generated id is: 1
console.log(`the generated id is: ${generatedId()}`) // the generated id is: 2

// Task 4: Create a closure that capture's a user's name and returns a function that greets the user by name

function user(name) {
    return function greet() {
        console.log(`Hello ${name}`)
    }
}
const userName = user("Umar Farooq")
userName() // Output: Hello Umar Farooq


// Activity 3: Closures in Loop

// Task 5: Write a loop that creates an array of functions. each function should log its index when called. Use a closure to ensure each function logs the correct index

