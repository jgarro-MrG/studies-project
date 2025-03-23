/**
 * VARIABLES:
 * 
 * 0: To hold things in memory during the life cycle of our program, we
 * can create variables. Variables are named identifiers that can point to 
 * values of a particular type, like a Number, String, Array, Object, or another
 * datatype. Variables are called so because we can change the value--and type of
 * value--to which they point.
 * 
 * 1. There are different options to declaring variables in Javascript.
 * The var keyword was the original (old) way of declaring variables.
 * With the ES6 update the let and const keywords were introduced to
 * replace var to primarily address issues with hoisting and lack of block scopee
 * 
 * The follwoing table details the differences between var, let and const
 *  
 *  +---------------+-----------+-----------+-----------+
 *  |               | var       | let       | const     |    
 *  +---------------+-----------+-----------+-----------+
 *  | scope         | function  | block     | block     |
 *  +---------------+-----------+-----------+-----------+
 *  | hoisting      | yes       | no        | no        | 
 *  +---------------+-----------+-----------+-----------+  
 *  | redeclaration | yes       | no        | no        |
 *  +---------------+-----------+-----------+-----------+
 *  | reassignment  | yes       | yes       | no        |
 *  +---------------+-----------+-----------+-----------+
 * 
 * 2. There are two phases of using variables: declaration and initialization (or
 * assignment).
 * 
 * 3. 
 * Use let for most cases due to its predictable behavior and the 
 * being scoped to blocks provides more security. 
 * 
 * Use const to store data values that will not change.
 * 
 * Using var should be avoided unless there is a good reasong for it
 * (like compatibility with legacy inherited code bases)
 * 
 */

// Scope
function testVarScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ 10 (available out the code block)
}

function testLetScope() {
    if (true) {
        let x = 10;
    }
    console.log(x); // ❌ ReferenceError: x is not defined
}

// Hoisting
function testVarHoisting() {
    console.log(x); // ✅ undefined
    var x = 10;
}

function testLetHoisting() {
    console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
    let y = 10;
}


// Redeclaration and Reassignment//
function testVar() {
    var x = 10;
    var x = 20; // ✅ No error
    console.log(x); // 20
} // x is allowed to be redeclared and reassigned

function testLet() {
    let y = 10;
    let y = 20; // ❌ SyntaxError: Identifier 'y' has already been declared
    console.log(y); // 10
    y = 20; // ✅ no error
    console.log(y); // 20
} // y is NOT allowed to be redeclared but it can be reassigned

function testConst() {
    const z = 50;
    const z = 30; // ❌ SyntaxError: Identifier 'z' has already been declared
    z = 30; // ❌ TypeError: Assignment to constant variable.
}