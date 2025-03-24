<!--- 
Number
String
Boolean
Array
Object
Function
undefined
null
NaN
Infinity / -Infinity
What is the difference between primitive/simple and complex data types?
Priomitive values are passed to a function BY COPY, complex values are BY REFERENCE. WHat does that mean, and how they are different?
 --->

# Data Types
<!--- introduction --->
> "In the computer’s world, there is only data."  
> <sub>*~Eloquent JavaScript*<sub>



<!--- explanation --->
### Definition
Data is composed of binary digits, or bits. A typical modern computer has more than 100 billion bits in its memory. To be able to work with such quantities of bits without gettin glost, we separate them into chunks that represet pieces of information. In a JavaScript environment, those chunks are called **values**. Every value has a type that determines its role.

## Numbers
Values of ```number``` type are basically, numeric values.
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