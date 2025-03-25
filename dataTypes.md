# Data Types
<!--- introduction --->
> "In the computer’s world, there is only data."  
> <sub>*~Eloquent JavaScript*<sub>

<!--- explanation --->
### Definition
Data is composed of binary digits, or bits. A typical modern computer has more than 100 billion bits in its memory. To be able to work with such quantities of bits without gettin glost, we separate them into chunks that represet pieces of information. In a JavaScript environment, those chunks are called **values**. Every value has a type that determines its role.


## Simple and Complex Data Types
<!--- 
What is the difference between primitive/simple and complex data types?
Priomitive values are passed to a function BY COPY, complex values are BY REFERENCE. WHat does that mean, and how they are different?
 --->
 Numbers, Booleans, and strings are the atoms from which data structures are built. Many types of information require more than one atom, though. Objects allow us to group values—including other objects—to build more complex structures.

## Number
In computing, **floating-point numbers** are a way to represent real numbers (numbers with decimal points) in a computer's memory, unlike integers which are whole numbers. 

In JavaScript, numbers are implemented in [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (i.e., a number between ±2^−1022 and ±2^+1023, or about ±10^−308 to ±10^+308, with a numeric precision of 53 bits). Integer values up to ±2^53 − 1 can be represented exactly.

Values of ```number``` type are basically, representations of any numeric value.
```js 
13 // represents the numeric value of 13
9.81 // represents a fractional number
```
Scientific notaion can be used to represent very big or very small numbers
```js
2.998e8 // That’s 2.998 × 10^8 = 299,800,000. 
625e-3 // That’s 625 x 10^-3 = 0.625
```
You can represent numbers in a different base
```js
0b10 // bianry representation of the decimal 2
0o10 // octal representation of the decimal 8
0x10 // hexadecimal representation of the decimal 16
```
In addition to being able to represent **floating-point numbers**, the number type has three symbolic values: `Infinity`, `-Infinity`, and `NaN` (not-a-number).
```js
const maxNumber = Math.pow(10, 1000); // 10 elevated to the 1000th power (Max positive number)
console.log(maxNumber); // Expected output: Infinity
```
JavaScript is not natively capable of handling complex numbers, math operation where the result is not a real number (e.g. the square root of a negative number) will evaluate to `NaN`.
```js
console.log(Math.sqrt(-1)); // Expected output: NaN
```
There are other operations that produce `NaN` values, which will be discussed later. 

## String
A string is a sequence of characters used to represent text. It is a set of "elements" of 16-bit unsigned integer values (UTF-16 code units). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. Strings are written by enclosing their content in quotes.
```js
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```
You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at the start and the end of the string match.

## Boolean

## Array
JavaScript provides a data type specifically for storing sequences of values. It is called an `array` and is written as a list of values between square brackets, separated by commas.

```js
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]); // → 5
console.log(listOfNumbers[0]); // → 2
console.log(listOfNumbers[2 - 1]); // → 3
```
The notation for getting at the elements inside an array also uses square brackets. A pair of square brackets immediately after an expression, with another expression inside of them, will look up the element in the left-hand expression that corresponds to the index given by the expression in the brackets.

The first index of an array is zero, not one, so the first element is retrieved with `listOfNumbers[0]`. Zero-based counting has a long tradition in technology and in certain ways makes a lot of sense, but it takes some getting used to. Think of the index as the number of items to skip, counting from the start of the array.

## Object
Values of the type object are arbitrary collections of properties.

## Function


## undefined


## null


## NaN
