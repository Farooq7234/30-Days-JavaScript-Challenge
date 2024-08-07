// Day 11: Promises and Async/Awaitin Javascript

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const resolvePromise = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Promise resolved after 5 seconds")
    }, 5000);
})

resolvePromise.then((message)=>{
    console.log(message)
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const rejectPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("The promise got rejected after 2 seconds")
    },2000)
})

rejectPromise.catch((error)=>{
    console.error(error)
})

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.


const fetchData = (data, delay)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        },delay)
    })
}


fetchData("fetching data from the server 1", 1000)
.then((message)=>{
    console.log(message)
    return fetchData("fetching data from the server 2", 2000)
})
.then((message)=>{
    console.log(message)
    return fetchData("fetching data from the server 3", 3000)
})
.then((message)=>{
    console.log(message)
    return fetchData("fetching data from the server 4", 4000)
})

// Activity 3: Using Async/Await


// Task 4: write an async function that waits for a promise to resolve and then logs the resolved value

const asyncResolve = async()=>{
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("the async promise will resolve after 3 seconds")
        },3000)
    })

    const result = await promise
    console.log(result)
}

asyncResolve()


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const asyncReject = async () =>{
    const promise = new Promise((_,reject)=>{
        setTimeout(()=>{
            reject("The async promise is reject after 2 seconds")
        },2000)
    })

    try {
        const result = await promise
        return result
    } catch (error) {
        console.log(error)
    }
}


asyncReject()



// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.


fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchDataAsync = async () => {
    try {
        const response = fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response
        console.log (data)        
    } catch (error) {
        console.log(error)
    }
}

fetchDataAsync()

// Activity 5: Concurrent Promises

//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values. Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

// Task 8

const promise1 = new Promise((resolve) =>
    setTimeout(resolve, 1000, "First promise")
  );
  const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 2000, "Second promise")
  );
  const promise3 = new Promise((resolve) =>
    setTimeout(resolve, 3000, "Third promise")
  );
  
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("All promises resolved:", values);
  });
  
  // Task 9
  Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log("First promise resolved:", value);
  });
  
  /*
  First promise resolved: First promise
  All promises resolved: [ 'First promise', 'Second promise', 'Third promise' ]
  */