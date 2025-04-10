# Variables
[comment]: <> (Introduction)
> "Variables: the vessels of data, holding the ever-shifting truths that shape our computational realities."

[comment]: <> (Explanation)
### Definition
Variables are like labeled containers that hold information, or values, in a program. Think of them as giving a name to a piece of data so you can easily refer to it and work with it later. They allow your program to remember things and change them as needed.

### Implementation
In JavaScript, you declare variables using keywords: var, let, and const. var is the oldest way and has some quirks regarding its scope (where it's accessible). let was introduced later and provides more predictable scoping rules. const is used for variables whose values should not be reassigned after they are initially set.

```js
// Using var (older, function-scoped)
var message = "Hello";
message = "World"; // You can reassign var

// Using let (block-scoped)
let counter = 0;
counter = counter + 1; // You can reassign let

// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // This would cause an error
```


The following table details the differences between var, let and const
|               |```var```  | ```let``` | ```const```| 
| ------------- | --------- | --------- | --------- |   
| scope         | function  | block     | block     |
| hoisting      | ✅        | ❌         | ❌        |  
| redeclaration | ✅        | ❌         | ❌        |
| reassignment  | ✅        | ✅         | ❌        |
|  |  |  |  | 


- Use ```let``` for most cases due to its predictable behavior and the being scoped to blocks provides more security 

- Use ```const```to store data values that will not change

- Using ```var``` should be avoided unless there is a good reasong for it, e.g. like compatibility with legacy inherited code bases

### Scope Examples
```js
function testVarScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ 10 (available out the code block)
}
```

```js
function testLetScope() {
    if (true) {
        let x = 10;
    }
    console.log(x); // ❌ ReferenceError: x is not defined
}
```

### Hoisting Examples
```js
function testVarHoisting() {
    console.log(x); // ✅ undefined
    var x = 10;
}
```

```js
function testLetHoisting() {
    console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
    let y = 10;
}
```

### Declaration, Redeclaration and Reassignment Examples
```js
function testVar() {
    var x = 10;
    var x = 20; // ✅ No error
    console.log(x); // 20
} // x is allowed to be redeclared and reassigned
```

```js
function testLet() {
    let y = 10;
    let y = 20; // ❌ SyntaxError: Identifier 'y' has already been declared
    console.log(y); // 10
    y = 20; // ✅ no error
    console.log(y); // 20
} // y is NOT allowed to be redeclared but it can be reassigned
```

```js
function testConst() {
    const z = 50;
    const z = 30; // ❌ SyntaxError: Identifier 'z' has already been declared
    z = 30; // ❌ TypeError: Assignment to constant variable.
}
```
