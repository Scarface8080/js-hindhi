// yotube video

// https://www.youtube.com/watch?v=zgt5oTD3rRc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=38&ab_channel=ChaiaurCode




// **JavaScript Asynchronous Code Study Guide**

// **Introduction to Asynchronous Code**
// - Asynchronous programming is a key concept in JavaScript, allowing for non-blocking operations. This guide will cover the fundamentals of asynchronous code, including promises and event handling.

// **Key Concepts**
// - **Synchronous vs. Asynchronous**: JavaScript is primarily a synchronous, single-threaded language, meaning it executes code line by line. However, it can handle asynchronous operations using callbacks, promises, and async/await .

// **Execution Context**
// - JavaScript runs in an execution context where code execution happens line by line. Each function call creates a new execution context, which is pushed onto the call stack .

// **Blocking vs. Non-Blocking Code**
// - **Blocking Code**: This type of code halts execution until a task is completed. For example, reading a file synchronously will block the entire program until the file is read .
// - **Non-Blocking Code**: This allows other operations to continue while waiting for a task to complete. For instance, using a callback to read a file asynchronously lets the program continue executing while waiting for the file read to finish .

// **Promises**
// - Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. They provide a cleaner way to handle asynchronous code compared to traditional callbacks .
// - A promise can be in one of three states: 
//   1. **Pending**: Initial state, neither fulfilled nor rejected.
//   2. **Fulfilled**: Operation completed successfully.
//   3. **Rejected**: Operation failed.

// **Using Promises**
// - Promises can be created using the `Promise` constructor. For example:
//   ```javascript
//   let myPromise = new Promise((resolve, reject) => {
//       // Asynchronous operation
//       if (/* operation successful */) {
//           resolve("Success!");
//       } else {
//           reject("Failure!");
//       }
//   });
//   ```
// - You can handle the result of a promise using `.then()` for success and `.catch()` for errors .

// **Event Loop and Callbacks**
// - The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It manages the execution of code, collecting and processing events, and executing queued sub-tasks .
// - Callbacks are functions passed as arguments to other functions and are executed after the completion of an asynchronous operation.

// **Web APIs and Task Queue**
// - JavaScript interacts with Web APIs (like `setTimeout`, `fetch`, etc.) that handle asynchronous tasks. When an asynchronous task is initiated, it is sent to the Web API, which processes it and places the result in the task queue .
// - The task queue holds tasks that are ready to be executed once the call stack is empty.

// **Example of Asynchronous Behavior**
// - Consider the following code snippet:
//   ```javascript
//   console.log("1");
//   setTimeout(() => console.log("2"), 0);
//   console.log("3");
//   ```
//   The output will be:
//   ```
//   1
//   3
//   2
//   ```
//   This demonstrates that the `setTimeout` function is non-blocking, allowing "3" to be logged before "2" .

// **Conclusion**
// - Understanding asynchronous programming is crucial for writing efficient JavaScript code. By mastering concepts like promises, the event loop, and non-blocking code, you can handle complex operations without freezing the application.