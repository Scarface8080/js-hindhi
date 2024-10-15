// **JavaScript Execution Context and Call Stack Study Guide**



// **1. Introduction to Execution Context**
// - The execution context is crucial in understanding how JavaScript executes code. It can be divided into two main types:

//   - **Global Execution Context**: This is the default context where the JavaScript code runs initially. It contains global variables and functions .
//   - **Function Execution Context**: Created whenever a function is invoked. Each function has its own execution context, which includes its own variables and parameters .



// **2. Phases of Execution Context**
// - **Memory Creation Phase**: During this phase, the JavaScript engine allocates memory for variables and functions. However, no code is executed yet .
// - **Execution Phase**: This is where the actual execution of code occurs. The values of variables are assigned, and functions are executed .

// **3. Call Stack**
// - The call stack is a data structure that keeps track of function calls in JavaScript. It operates on a Last In, First Out (LIFO) principle, meaning the last function called is the first to be executed .
// - When a function is called, a new execution context is created and pushed onto the stack. Once the function completes, its context is popped off the stack .

// **4. Example of Execution Context**
// - Consider a simple example where we define a function that adds two numbers:
//   ```javascript
//   function add(num1, num2) {
//       return num1 + num2;
//   }
//   let result = add(5, 10);
//   ```
//   - When `add` is called, a new function execution context is created for it, and the parameters `num1` and `num2` are allocated memory .

// **5. Visualizing the Call Stack**
// - When functions are called in succession, the call stack grows:
//   - If `add` calls another function, that function's execution context is pushed onto the stack .
//   - The stack unwinds as each function completes, returning control to the previous context .

// **6. Conclusion**
// - Understanding execution contexts and the call stack is essential for mastering JavaScript, especially for debugging and optimizing code. Each context provides a unique environment for variable scope and function execution, which is fundamental to how JavaScript operates in both browsers and Node.js .