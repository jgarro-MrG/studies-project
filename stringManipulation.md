# String Manipulation
<!--- introduction --->
Some comment to introduce the concept

<!--- explanation --->
#### Definition
String manipulation involves working with and modifying text data. This includes tasks like combining strings, extracting parts of strings, finding specific characters or substrings, and changing the case of the text.

#### Implementation
JavaScript provides built-in properties and methods to manipulate strings. Strings are immutable, meaning their original value cannot be changed directly. String methods always return a new string with the modification.

#### String Concatenation using the `+` Operator

The `+` operator can be used to combine two or more strings into a new string. When one of the operands of the `+` operator is a string, JavaScript will treat the other operand as a string as well (if possible) and perform concatenation.

```js
let greeting = "Hello";
let space = " ";
let name = "World";
let message = greeting + space + name + "!";
console.log(message); // Output: Hello World!

let age = 30;
let info = "My age is: " + age; // Number is implicitly converted to a string
console.log(info); // Output: My age is: 30
```

#### String Interpolation (Template Literals with ES6)

S6 (ECMAScript 2015) introduced template literals (also known as template strings), which provide a more powerful and readable way to perform string interpolation. Template literals are enclosed in backticks `` ` `` instead of single `'` or double quotes `"`. You can embed expressions (including variables) directly within a template literal using the `${expression}` syntax.

```js
let firstName = "Alice";
let lastName = "Smith";
let age = 25;

let greeting = `Hello, ${firstName} ${lastName}! You are ${age} years old.`;
console.log(greeting); // Output: Hello, Alice Smith! You are 25 years old.

let price = 19.99;
let quantity = 3;
let total = `The total cost is $${price * quantity}.`;
console.log(total); // Output: The total cost is $59.97.

function getFullName(first, last) {
  return `${first} ${last}`;
}
let fullName = getFullName("Bob", "Johnson");
let message2 = `The full name is: ${fullName}.`;
console.log(message2); // Output: The full name is: Bob Johnson.
```
Template literals offer several advantages over traditional string concatenation with the + operator, including:

- **Readability**: They are often easier to read, especially when embedding multiple variables or expressions.

- **Simplicity**: You don't need to use multiple + operators and quotes.

- **Multiline strings**: Template literals can span multiple lines without special syntax.

```js
let multilineString = `This is a
string that spans
multiple lines.`;
console.log(multilineString);
/*
Output:
This is a
string that spans
multiple lines.
*/
```