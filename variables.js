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

// 1. Declaration //
var myName; // variable declared but not assigned a value
console.log(myName); // prints => undefined

// 2. Initialization or Assignment //
myName = 'John';
console.log(myName); // prints => john

// 3. Reassignment //
myName = 'bob';
console.log(myName); // prints => bob