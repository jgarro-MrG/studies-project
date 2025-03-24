# Variables
[comment]: <> (Introduction)
To hold things in memory during the life cycle of our program, we can create variables.

[comment]: <> (Explanation)
#### Definition
Variables are named identifiers that can point to  values of a particular type, like a Number, String, Array, Object, or another datatype. Variables are called so because we can change the value--and type of value--to which they point.

#### Implementation
There are two phases of using variables: declaration and initialization (or assignment). There are different options to declaring variables in Javascript. The var keyword was the original (old) way of declaring variables. With the ES6 update the let and const keywords were introduced to eplace var to primarily address issues with hoisting and lack of block scope

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
