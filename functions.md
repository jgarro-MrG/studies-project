# Functions
> "Functions: the artisan's tools, each honed to perform a specific craft within the grand creation of software."

<!--- introduction --->
Functions are reusable blocks of code that perform a specific task. They are fundamental building blocks in JavaScript, allowing you to organize your code, make it more modular, and avoid repetition.

<!--- explanation --->
#### Definition
Definition of the concept

### The Two Phases of Using Functions
Using functions in JavaScript involves two primary phases:

- **Declaration (or Definition):** This is where you define what the function does, its name (if any), and any parameters it might accept. You are essentially creating the blueprint for the action the function will perform.

- **Execution (or Calling, or Invoking):** This is when you actually run the code inside the function. You "call" or "invoke" the function by using its name followed by parentheses `()`. If the function expects arguments, you pass them inside these parentheses.

### Parameters vs. Arguments

- **Parameters:** These are variables listed inside the parentheses in the function declaration. They act as placeholders for the values that will be passed into the function when it is called. Think of them as the names of the expected inputs.   

- **Arguments:** These are the actual values that you provide to the function when you call (or invoke) it. These values are assigned to the corresponding parameters of the function.

```js
// Function declaration with parameters 'param1' and 'param2'
function add(param1, param2) {
  console.log("Parameter 1:", param1);
  console.log("Parameter 2:", param2);
  return param1 + param2;
}

// Function call with arguments 5 and 3
let result = add(5, 3); // 5 is the argument for param1, 3 is the argument for param2
console.log("Result:", result); // Output: Result: 8
```

### Syntax for a Named Function

A named function is declared using the `function` keyword, followed by a name (the identifier you'll use to call the function), parentheses `()` that may contain parameters, and a block of code enclosed in curly braces `{}` that defines the function's body.

```js
function greet(name) {
  return "Hello, " + name + "!";
}

let message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

### Assigning a Function to a Variable

In JavaScript, functions are **first-class citizens**, which means they can be treated like any other value. You can assign a function to a variable. When you do this, the variable holds a reference to the function.

When we say that something is a "**first-class citizen**" (or "**first-class object**") in a programming language, it means that it has the following characteristics:
- **Can be assigned to variables:** You can store the value in a variable.
- **Can be passed as arguments to functions:** You can use the value as an input to a function.
- **Can be returned as the result of a function:** A function can produce the value as its output.
- **Can be created during program execution:** The value doesn't need to be hardcoded; it can be created dynamically.

```js
const multiply = function(a, b) { // Anonymous function assigned to the variable 'multiply'
  return a * b;
};

let product = multiply(4, 6);
console.log("Product:", product); // Output: Product: 24

function sayGoodbye(name) {
  return "Goodbye, " + name + ".";
}

const farewell = sayGoodbye; // Assigning the named function 'sayGoodbye' to the variable 'farewell'
let finalMessage = farewell("Bob");
console.log(finalMessage); // Output: Goodbye, Bob.
```

### Specifying Inputs (Parameters) and Outputs (Return Value)

- **Inputs (Parameters):** You specify inputs to a function by listing parameter names within the parentheses in the function declaration. These parameters act as local variables within the function's scope and receive the values of the arguments passed during the function call. A function can have zero or more parameters.
    ```js
    function power(base, exponent) { // 'base' and 'exponent' are parameters
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
    }

    let eight = power(2, 3); // 2 and 3 are arguments
    console.log(eight); // Output: 8
    ```

- **Outputs (Return Value):** A function can optionally return a single value back to the part of the code that called it. You use the `return` keyword inside the function's body to specify the value to be returned. Once a `return` statement is executed, the function's execution stops. If a function does not have a `return` statement, or if the `return` statement is used without a value, the function implicitly returns `undefined`.   

    ```js
    function calculateArea(length, width) {
    let area = length * width;
    return area; // Returns the calculated area
    }

    let rectangleArea = calculateArea(5, 10);
    console.log("Area:", rectangleArea); // Output: Area: 50

    function logMessage(message) {
    console.log(message);
    // No explicit return, so it implicitly returns undefined
    }

    let returnValue = logMessage("Hello from the function"); // Output: Hello from the function
    console.log("Return value:", returnValue); // Output: Return value: undefined
    ```

### Scope

Scope refers to the visibility and accessibility of variables in different parts of your code. Functions in JavaScript create their own scope.

- **Functions can see and modify variables in parent or global scopes:** When a variable is not found within the current function's scope, JavaScript will look up the scope chain to find that variable in its enclosing (parent) scopes, and ultimately in the global scope. If found, the function can access and even modify these outer scope variables (though modifying global variables directly from within a function is generally discouraged for maintainability).

- **The inverse is NOT true:** Variables declared within a function's scope are generally not directly accessible from outside that function. They are local to the function.

    ```js
    let globalVar = "I'm global";

    function outerFunction() {
    let outerVar = "I'm in outerFunction";

    function innerFunction() {
        console.log(globalVar); // innerFunction can access globalVar
        console.log(outerVar);  // innerFunction can access outerVar
        outerVar = "Outer var modified by inner";
    }

    innerFunction();
    console.log(outerVar); // Output: Outer var modified by inner
    }

    outerFunction();
    console.log(globalVar); // Accessible here
    // console.log(outerVar); // Error: outerVar is not defined here
    ```

### Closures

Closures are a powerful feature in JavaScript that occur when an inner function retains access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.   

- ***Functions form closures around the data they house:** When a function is defined inside another function, the inner function "closes over" the variables of the outer function.

- **If an object returned from the function and is held in memory somewhere (referenced), that closure stays alive, and data can continue to exist in these closures:** If the inner function (or a value that references it) is returned from the outer function and is still accessible through a variable in the outer scope (or any other reachable scope), the inner function maintains its access to the outer function's variables. These variables are said to be part of the closure. This allows for data to persist and be manipulated even after the outer function has completed.

    ```js
    function createCounter() {
    let count = 0; // 'count' is a variable in the outer function's scope

    return {
        increment: function() {
        count++; // The inner function 'increment' closes over 'count'
        },
        getValue: function() {
        return count; // The inner function 'getValue' also closes over 'count'
        }
    };
    }

    const counter = createCounter(); // 'counter' now holds an object with the inner functions

    counter.increment();
    counter.increment();
    console.log(counter.getValue()); // Output: 2

    // Even though createCounter has finished executing, the 'count' variable
    // persists because it's being referenced by the 'increment' and 'getValue'
    // functions within the 'counter' object (the closure).
    ```

### Anonymous Functions

An anonymous function is a function that does not have a name. They are often used in situations where a function is needed as a value, such as when assigning a function to a variable or passing a function as an argument to another function.

```js
// Anonymous function assigned to a variable
const square = function(number) {
  return number * number;
};

console.log(square(5)); // Output: 25

// Anonymous function used as a callback in an event listener (example)
// document.addEventListener('click', function() {
//   console.log('Button clicked!');
// });
```

### Arrow Functions (ES6)

Arrow functions provide a more concise syntax for writing function expressions. They are anonymous by default but can be assigned to variables to give them a name. Arrow functions have some differences in behavior compared to traditional functions, particularly regarding the `this` keyword and `arguments` object.

```js
// Basic arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 7)); // Output: 10

// Arrow function with a single parameter (parentheses can be omitted)
const double = number => number * 2;
console.log(double(6)); // Output: 12

// Arrow function with implicit return (for single expression)
const multiplyByTen = value => value * 10;
console.log(multiplyByTen(4)); // Output: 40

// Arrow function with no parameters
const sayHello = () => {
  console.log("Hello!");
};
sayHello(); // Output: Hello!
```