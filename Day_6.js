// Day 6: Arrays

// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5]

console.log(arr) // [ 1, 2, 3, 4, 5 ]


// Task 2: Access the first and last elements of the array and log them to the console.

console.log(`Accessing the first element of array: ${arr[0]}`)
console.log(`Accessing the last element of array: ${arr[4]}`)

// Activity 2: Array Methods (Basic)


// Task 3: Use the push method to add a new number to the end of an array and log the updated array.

arr.push(6)
console.log(arr)  // [ 1, 2, 3, 4, 5, 6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.


arr.pop()
console.log(arr) // [ 1, 2, 3, 4, 5 ]


// Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr.shift()
console.log(arr) // [ 2, 3, 4, 5 ]


// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1)
console.log(arr) // [ 1, 2, 3, 4, 5 ]

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let newArr = [6, 7, 8, 9, 10]
const mapResult = newArr.map((arr) => arr * arr)

console.log(mapResult) // [ 36, 49, 64, 81, 100 ]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const filterResult = newArr.filter((arr) => arr % 2 == 0)

console.log(filterResult) // [ 6, 8, 10 ]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const reduceResult = newArr.reduce((acc, curr) => acc + curr, 0);

console.log(reduceResult) // 40


// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}
// output 
// 1
// 2
// 3
// 4
// 5


// Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr.forEach(element => {
    console.log(element)
});


// Output 

// 1
// 2
// 3
// 4
// 5

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.



let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);


// Task 13: Access and log a specific element from the two-dimensional array

let specificElement = matrix[1][2]; 
console.log(specificElement); // Outputs: 6