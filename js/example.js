/**
 * VARIABLES:
 * 
 * 0: To hold things in memory during the life cycle of our program, we
 * can create variables. Variables are named identifiers that can point to 
 * values of a particular type, like a Number, String, Array, Object, or another
 * datatype. Variables are called so because we can change the value--and type of
 * value--to which they point.
 * 
 * 1. To create a variable we declare it using the keyword var, followed by a
 * name (id or alias) for the variable.
 * 
 * 2. There are two phases of using variables: declaration and initialization (or
 * assignment).
 * 
 * 3. Variables declared with var can be reassigned at any time.
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