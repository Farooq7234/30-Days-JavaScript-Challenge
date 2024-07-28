// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.



const name = "Farooq"
const age = 21
const msg = `My name is ${name} and I am ${age} years old`
console.log(msg)
// Output: My name is Farooq and I am 21 years old


// Task 2: Create a multi-line string using template literals and log it to the console.


const multiLineString = `hello this
is a multi line string to show example of template literals working`

console.log(multiLineString)
// Output:

/*`hello this
is a multi line string to show example of template literals working*/


// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console


const numbers = [1,2,3,4,5,6]
const [first, second] = numbers
console.log(first) // 1 
console.log(second) // 2


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title:"the title of the book",
    author:"author of the book"
}

const {title, author} = book
console.log(`the title: ${title} and author: ${author}`)

// Output: the title: the title of the book and author: author of the book


// Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const oldArray = [1,2,3]
const newArray = [...oldArray,4,5]

console.log(newArray) 
// Output: [ 1, 2, 3, 4, 5 ]


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...arbitraryNumbers) {
    return arbitraryNumbers.reduce((total,num)=> total + num,0)
}

console.log(sum(1,2,3)) // Output: 6

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

// with parameter and with out parameter ☕


function addTwoNum(a, b=1) {
    return a * b
}

console.log(addTwoNum(5,4)) // Output: 20 => 5 * 4
console.log(addTwoNum(5)) // Output: 5 => 5 * 1

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.


const employee = "Farooq"
const experience = 3

const company = {
    employee,
    experience,
    info(){
        return `Hello, my name is ${this.employee} and I have ${experience} of experience in tech `
    }
}

console.log(company);
// Output: { employee: 'Farooq', experience: 3, info: [Function: info] }
console.log(company.info()); 
// Output: Hello, my name is Farooq and I have 3 of experience in tech 

// Task 9: Create an object with computed property names based on variables and log the object to the console.

const key = "Language"
const value = "JavaScript"

const obj = {
    [key]:value    
}

console.log(obj) 

// Output: { Language: 'JavaScript' }