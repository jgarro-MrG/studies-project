# Operators
<!--- introduction --->


<!--- explanation --->
#### Definition

Operators are special symbols in JavaScript that perform actions on values (operands). They allow you to manipulate data, perform calculations, make comparisons, and assign values to variables.

### Assignment Operators

Assignment operators are used to assign values to variables. The most basic assignment operator is the equals sign `=`, which assigns the value on the right to the variable to its left. JavaScript also provides shorthand assignment operators that combine an arithmetic or bitwise operation with assignment.

```js
let x = 10; // Basic assignment
```
### Assignment Operators

Arithmetic operators are used to perform mathematical calculations on numeric values.

```js
let a = 5;
let b = 2;

let sum = a + b;       // Addition (7)
let difference = a - b;  // Subtraction (3)
let product = a * b;     // Multiplication (10)
let quotient = a / b;    // Division (2.5)
let remainder = a % b;   // Modulo (remainder of division) (1)
let exponent = a ** b;  // Exponentiation (a raised to the power of b) (25)
```

JavaScript also provides shorthand assignment operators that combine an arithmetic or bitwise operation with assignment.

```js
let x = 10; // Basic assignment
x += 5; // Equivalent to x = x + 5; (x is now 15)
x -= 2; // Equivalent to x = x - 2; (x is now 13)
x *= 3; // Equivalent to x = x * 3; (x is now 39)
x /= 3; // Equivalent to x = x / 3; (x is now 13)
x %= 4; // Equivalent to x = x % 4; (x is now 1)
x **= 2; // Equivalent to x = x ** 2; (x is now 1)
```

### Comparison Operators

Comparison operators are used to compare two values and return a boolean value (`true` or `false`).

```js
let p = 10;
let q = 5;
let r = "10";

let isEqual = p == r;         // Loose equality (checks value, may perform type coercion) (true)
let isStrictlyEqual = p === r; // Strict equality (checks value and type) (false)
let isNotEqual = p != q;       // Loose inequality (true)
let isStrictlyNotEqual = p !== r; // Strict inequality (true)
let isGreaterThan = p > q;    // Greater than (true)
let isLessThan = p < q;       // Less than (false)
let isGreaterThanOrEqual = p >= r; // Greater than or equal to (true)
let isLessThanOrEqual = q <= b;   // Less than or equal to (true, assuming b is still 2)
```

### Logical Operators

Logical operators are used to combine or modify boolean values.

```js
let condition1 = true;
let condition2 = false;

let andOperator = condition1 && condition2; // Logical AND (false)
let orOperator = condition1 || condition2;  // Logical OR (true)
let notOperator = !condition1;             // Logical NOT (false)
```

### Unary Operators

Unary operators perform an operation on a single operand.

```js
let num = 5;

let incrementPrefix = ++num; // Prefix increment (num becomes 6, incrementPrefix is 6)
let decrementPostfix = num--; // Postfix decrement (decrementPostfix is 6, num becomes 5)
let negation = -num;        // Unary negation (-5)
let positive = +num;        // Unary plus (converts to number if not already) (5)
let typeOfOperator = typeof num; // Returns the data type of the operand ("number")
```

### Ternary Operator (a ? b : c)

The ternary operator is a concise way to write a simple if-else conditional expression. It takes three operands: a condition (`a`), an expression to evaluate if the condition is true (`b`), and an expression to evaluate if the condition is false (`c`).

```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // Output: Can vote: Yes

let isRainy = false;
let activity = isRainy ? "Stay inside" : "Go outside";
console.log("Activity:", activity); // Output: Activity: Go outside
```

### Operator



```js

```

### Operator



```js

```

