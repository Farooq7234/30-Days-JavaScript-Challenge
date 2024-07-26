// Activity 1: Object creation and access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console

const book = {
    title:"JavaScript",
    author:"FamousAuthor",
    year:1990,
}

console.log(book)  // Output: { title: 'JavaScript', author: 'FamousAuthor', year: 1990 }


// Task 2: Access and log the title and author properties of the book object.

console.log(`${book['title']} ${book['author']}`) // Output: JavaScript FamousAuthor

// Activity 2 

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method


book.getTitleAndAuthor = function () {
    return `${this.title} by ${this.author}`;
};
console.log(book.getTitleAndAuthor()); // Output: JavaScript by FamousAuthor


// Task 4:  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object

book.updateYear = function (newYear) {
    this.year = newYear
}

book.updateYear(2023)
console.log(book['year']) // output: 2023
console.log(book) 
/* 
Output:
 {
  title: 'JavaScript',
  author: 'FamousAuthor',
  year: 2023,
  getTitleAndAuthor: [Function (anonymous)], 💠💠💠
  updateYear: [Function (anonymous)] 💠💠💠
}
  */


// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 

let myLibrary = {
    name: "My Library",
    books: [
        { title: "my first book", author: "umar", year: 2024 },
        { title: "my second book", author: "farooq", year: 2023 }
    ]
};
console.log(myLibrary);

/* Output:
{
  name: 'My Library',
  books: [
    { title: 'my first book', author: 'umar', year: 2024 },
    { title: 'my second book', author: 'farooq', year: 2023 }
  ]
}*/ 

// Task 6: Access and log the name of the library and the titles of all the books in the library 

console.log(`the library name is ${myLibrary['name']}`) // output: the library name is My Library
for (const element of myLibrary.books) {
    console.log(element);
}  

// Output: Task 6 

/*

{ title: 'my first book', author: 'umar', year: 2024 }
{ title: 'my second book', author: 'farooq', year: 2023 }
 
*/
// Activity 4: The this keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string wit the book's title and year, and log the result of calling this method

book.getTitleAndYear = function() {
    return this.title + " (" + this.year + ")";
};
console.log(book.getTitleAndYear()); // output: JavaScript (2023)


// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let property in book) {
    console.log(`${property} : ${book[property]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));









