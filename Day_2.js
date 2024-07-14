// Day 2 Operators

//Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console
// Task 2: Write a program to subtract two numbers and log the result to the console
// Task 3: Write a program to multiply two numbers and log the result to the console
// Task 4: Write a program to divide two numbers and log the result to the console

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console
const num1 = 10;
const num2 = 20;

console.log(`Addition of num1 and num2 is: ${num1 + num2} `); // Addition of num1 and num2 is: 30 
console.log(`Subtraction of num1 and num2 is: ${num1 - num2} `); //Subtraction of num1 and num2 is: -10 
console.log(`Multiplication of num1 and num2 is: ${num1 * num2} `); // Multiplication of num1 and num2 is: 200 
console.log(`Division of num1 and num2 is: ${num1 / num2} `); // Divition of num1 and num2 is: 0.5 
console.log(`Remainder of num1 and num2 is: ${num1 % num2} `); // Remainder of num1 and num2 is: 10 


// Activity 2: Assigment operators

// Task 6: Use the += Operator to add number to a variable and log the result to the console

// Task 7: Use the operator  -=  to subtract a number from a variable and log the result to the console.

let incrementNum = 12;
incrementNum +=1;

let decrementNum = 10;
decrementNum -= 1;

console.log(incrementNum); // 13 
console.log(decrementNum); // 9


// Activity 3: Comparison Operators

// Task 8: Write a program to compare two number using > and < and log the result to the console

// Task 9: Write a program to compare two number using >= and <= and log the result to the console

// Task 10: Write a program to compare two numbers using  == and === and log the result to the console



console.log(3 > 1); // true
console.log(3 < 1); // false


console.log(4 >= 1); // true
console.log(45 <= 100); // true

console.log( 10 == '10'); // true
console.log( 10 === '10'); // false

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

const condition1 = true;
const condition2 = false;

console.log( condition1 && condition2); // false
console.log( condition1 || condition2); // true
console.log(!condition1); // false


// Activity 5: Ternary operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
const ternaryExample = true;

const result = ternaryExample ? true : false;
console.log(result); // true






