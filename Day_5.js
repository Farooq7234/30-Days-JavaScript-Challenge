// Day 5: Functions

// Tasks/Activities:

// Task 1: Write a function to check if a number is even or odd and log the result to the console.


function checkEvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}


checkEvenOrOdd(10) // 10 is even
checkEvenOrOdd(3) // 3 is even

// Task 2: Write a function to calculate the square of a number and return the result.


function calculateSquare(num) {
    return num * num
}

console.log(calculateSquare(2)) // 4
console.log(calculateSquare(10)) // 100


// Activity 2: Function Expression


// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function (num1, num2) {
    if (num1>num2) {
        console.log(`${num1} is greater than ${num2}`)
    }
    else{
        console.log(`${num2} is greater then ${num1}`)
    }
}
findMax(2,3) // 3 is greater than 2
findMax(10,7) // 10 is greater than 7

// Task 4: Write a function expression to concatenate two strings and return the result.

const concateTwoStrings = function (str1, str2) {
    return str1 + str2
}


console.log(concateTwoStrings("hello ", "world")) // hello world
console.log(concateTwoStrings("good  ", "morning")) // good morning

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const calSum = (num1, num2) =>{
    return num1 + num2
}
 
console.log(calSum(2,2)); // 4
console.log(calSum(10,39)); // 49


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const charCheck = (str, charcheck) =>{
    return str.includes(charcheck)
}

console.log(charCheck("Farooq","q")) // true
console.log(charCheck("Umar","f")) // false

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.


function maxChecker(num1, num2 = 2) {
    if (num1>num2) {
        console.log(`${num1} is greater than ${num2}`)
    }
    else{
        console.log(`${num2} is greater then ${num1}`)
    }
}

maxChecker(20)

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.

function greet(person, age = 21) {
    return `${person} age is ${age}`
}

console.log(greet("farooq"))


// Activity 5: Higher-Order Function

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

repeatFunction(() => console.log("Hello!"), 3);



// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function composeFunctions(func1, func2, value) {
    return func2(func1(value));
  }
  

  const addOne = x => x + 1;
  const square = x => x * x;
  
  const result = composeFunctions(addOne, square, 2); // ((2 + 1) ^ 2) = 9
  console.log(result); // Outputs: 9
  