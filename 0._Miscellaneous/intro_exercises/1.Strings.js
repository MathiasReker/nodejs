// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
console.log(+numberOne);
console.log(+numberTwo);

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const total = +anotherNumberOne + +anotherNumberTwo;
console.log(total.toFixed(2))

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const average = array => array.reduce((a, b) => a + b) / array.length;
console.log(average([one, two, three]));

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"
console.log(letters.slice(-1));

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";
const str = 'javascript';
const result = fact.replace(str, str.charAt(0).toUpperCase() + str.slice(1));
console.log(result);
// capitalize the J in Javascript


// --------------------------------------



