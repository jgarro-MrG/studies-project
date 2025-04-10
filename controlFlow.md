# Controls Flow
<!--- introduction --->
> "Control flow: the subtle hand guiding the program's journey, where logic dances with possibility."

<!--- explanation --->
#### Definition
Control flow statements dictate the order in which the code in your program is executed. They allow your program to make decisions and perform different actions based on conditions.

#### Implementation

JavaScript provides several control flow structures:

- **`if`, `else if`, `else` statements**: Execute different blocks of code based on whether a specified condition is true or false.

- **switch statement**: Evaluates an expression and matches its value against several cases, executing the code block associated with the matching case.

- **Ternary operator (? :)**: A concise way to write simple if-else conditions in a single line.

```js
let temperature = 22;

// if, else if, else
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cool.");
}

let dayOfWeek = "Wednesday";

// switch
switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day.");
}

let isMember = true;
let discount = isMember ? 0.1 : 0; // Ternary operator: if isMember is true, discount is 0.1, otherwise 0
console.log("Discount:", discount); // Output: Discount: 0.1
```