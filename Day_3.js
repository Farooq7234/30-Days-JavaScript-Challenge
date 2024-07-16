// Activity 1 : If-Else-Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console

let num = 10;

if (num > 0) {
    console.log(`the number ${num} is a positive number`);
}

else if (num === 0) {
    console.log(`the number ${num} is a  zero`);
} else {
    console.log(`the number ${num} is a negative number`);
}

// Output: the number 10 is a positive number 

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the  console

const age = 18;

if(age>=18){
    console.log("You are eligible for vote")
}

else {
    console.log("You are not eligible for vote")
}

// Output: You are eligible for vote

// Activity 2: Nested If-Else statements

// Task 3: write a program to find the largest of three numbers using nested if-else statements

let a = 10;
let b = 20;
let c = 30;

if (a >= b) {
    if (a >= c) {
        console.log("a is the greatest");
    } else {
        console.log("c is the greatest");
    }
} else {
    if (b >= c) {
        console.log("b is the greatest");
    } else {
        console.log("c is the greatest");
    }
}

// Output => c is the greatest

// Activity 3: Switch Case

// Task 4: write a program that uses switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 

const key = 3;

switch (key) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;

    default:
        console.log(`the provided key ${key} is invalid`)
        break;
}

// Output => Tuesday

// Task 5: Write a program that uses a switch case to assign a grade ("A","B","C","D","F") based on a score and log the grade to the console

let studentMark = 10;
let grade;

switch (true) {
    case (studentMark >= 90 && studentMark <=100):
        grade = "A";
        console.log(grade)
        break;
    case (studentMark >= 80 && studentMark <=90):
        grade = "B";
        console.log(grade)
        break;
    case (studentMark >= 70 && studentMark <=80):
        grade = "C";
        console.log(grade)
        break;
    case (studentMark >= 60 && studentMark <=70):
        grade = "D";
        console.log(grade)
        break;
    case (studentMark < 60):
        grade = "F"
        console.log(grade)
        break;
    default:
        console.log("Your Marks are invalid")
}

// Output =>  F


// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console


const isOddOrEven = 3
const result = isOddOrEven % 2 == 0 ?  "Even" : "Odd"
console.log(result) // Odd
  

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console


let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);
        }
    } else {
        console.log(`${year} is a leap year`);
    }
} else {
    console.log(`${year} is not a leap year`); // 2024 is a leap year
}
