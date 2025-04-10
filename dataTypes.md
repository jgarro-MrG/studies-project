# Data Types
<!--- introduction --->
> "In the computer’s world, there is only data."  
> <sub>*~Eloquent JavaScript*<sub>

<!--- explanation --->
### Definition
Data types categorize the different kinds of values that variables can hold. They tell the JavaScript engine how to interpret and work with the data. 

JavaScript has several fundamental data types. 
- **Number** represents numeric values, including integers and floating-point numbers. 

- **String** represents sequences of characters used for text. Boolean represents logical values, either true or false. 

- **Array** is an ordered collection of items. 

- **Object** is a collection of key-value pairs, used to represent more complex entities. Function is a block of reusable code. 

- **Undefined** represents a variable that has been declared but has not yet been assigned a value. 

- **Null** represents the intentional absence of a value. 

- **NaN** (Not-a-Number) is a special numeric value indicating that an operation that should have returned a number did not. 

- **Infinity** and **-Infinity** are special numeric values representing positive and negative infinity, often resulting from division by zero.

Data types are often categorized as Simple (Primitive) and Complex (Reference).

- **Simple data types** (number, string, boolean, null, undefined) are immutable and are copied by value, meaning when you assign a simple data type variable to another, you create a completely independent copy. 

- **Complex data types** (object, array, function) are mutable and are copied by reference, meaning when you assign a complex data type variable, you are essentially creating another reference to the same underlying data in memory; changes to one reference will affect the others.

```js
// Number
let age = 30;
let price = 99.99;
let notANumber = NaN;
let infiniteValue = Infinity;

// String
let name = "Alice";
let message = 'Hello!';

// Boolean
let isTrue = true;
let isFalse = false;

// Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];

// Object
let person = { name: "Bob", age: 25 };
let car = { make: "Toyota", model: "Camry" };

// Function
function greet(personName) {
  return "Hello, " + personName + "!";
}
let sayHello = greet; // Assigning the function to a variable

// Undefined
let city; // Declared but not assigned
console.log(city); // Output: undefined

// Null
let emptyValue = null;

// Copy by Value (Simple Types)
let num1 = 10;
let num2 = num1; // num2 gets a copy of the value of num1
num2 = 20;
console.log(num1); // Output: 10 (num1 is unchanged)
console.log(num2); // Output: 20

let str1 = "hello";
let str2 = str1;
str2 = "world";
console.log(str1); // Output: hello
console.log(str2); // Output: world

// Copy by Reference (Complex Types)
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 gets a reference to the same array as arr1
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is changed because arr2 references the same array)
console.log(arr2); // Output: [1, 2, 3, 4]

let obj1 = { a: 1 };
let obj2 = obj1;
obj2.b = 2;
console.log(obj1); // Output: { a: 1, b: 2 } (obj1 is changed)
console.log(obj2); // Output: { a: 1, b: 2 }
```