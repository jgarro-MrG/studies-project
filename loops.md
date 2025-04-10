# Loops
<!--- introduction --->
Some comment to introduce the concept

<!--- explanation --->
#### Definition
Loops are programming constructs that allow you to repeatedly execute a block of code as long as a certain condition remains true. They are essential for automating repetitive tasks.

#### Counting Forward

You can use a for loop to count forward up to a specific limit by initializing a counter variable to a starting value, setting a condition that checks if the counter is less than or equal to the limit, and incrementing the counter in each iteration.

```js
// Counting from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Forward count:", i); // Output: 1, 2, 3, 4, 5
}
```

#### Counting Backwards

To count backward down to a specific limit (like 0), you initialize the counter to the starting value, set a condition that checks if the counter is greater than or equal to the limit, and decrement the counter in each iteration.

```js
// Counting down from 5 to 0
for (let i = 5; i >= 0; i--) {
  console.log("Backward count:", i); // Output: 5, 4, 3, 2, 1, 0
}
```

#### Looping Over an Array Forward

You can iterate through the elements of an array in the forward direction using a for loop with an index that starts at 0 and goes up to the length of the array minus 1. You can access each element using bracket notation with the index. The `for...of` loop provides a more concise way to achieve this.

```js
let fruits = ["apple", "banana", "cherry"];

// Using a traditional for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Forward fruit (for loop):", fruits[i]); // Output: apple, banana, cherry
}

// Using a for...of loop (more concise)
for (let fruit of fruits) {
  console.log("Forward fruit (for...of):", fruit); // Output: apple, banana, cherry
}
```

#### Looping Over an Array Backwards

To loop through an array in reverse order, you can use a `for` loop where the index starts at the last element's index `array.length - 1` and decrements down to `0`.

```js
let colors = ["red", "green", "blue"];

// Looping backwards
for (let i = colors.length - 1; i >= 0; i--) {
  console.log("Backward color:", colors[i]); // Output: blue, green, red
}
```

#### Looping Over an Object

To iterate over the properties (keys) of an object, you typically use the `for...in` loop. This loop iterates over the enumerable properties of an object. Inside the loop, you can access the value of each property using bracket notation with the key.

```js
let person = { name: "Charlie", age: 35, city: "London" };

for (let key in person) {
  console.log(`Property '${key}': ${person[key]}`);
  // Output:
  // Property 'name': Charlie
  // Property 'age': 35
  // Property 'city': London
}

// You can also get the keys, values, or entries (key-value pairs) as arrays
let keys = Object.keys(person);
console.log("Keys:", keys); // Output: Keys: [ 'name', 'age', 'city' ]

let values = Object.values(person);
console.log("Values:", values); // Output: Values: [ 'Charlie', 35, 'London' ]

let entries = Object.entries(person);
console.log("Entries:", entries);
// Output:
// Entries: [
//   [ 'name', 'Charlie' ],
//   [ 'age', 35 ],
//   [ 'city', 'London' ]
// ]

// You can then loop over these arrays using for...of
for (let [key, value] of Object.entries(person)) {
  console.log(`Entry - Key: ${key}, Value: ${value}`);
}
```