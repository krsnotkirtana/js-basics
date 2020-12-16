// DOM Methods
// alert('This is an alert');
// confirm('Do you accept our terms and conditions?');
// prompt('Enter your name: ');

// Console Methods
// console.log('Hey, it is me!');
// console.warn('This is a warning to you!');
// console.error('This is an error!');

// Variables
// let text = "Sample Text";
// let age = 13;
// age = 14;
// console.log(age);

// const PI = 3.14;
// console.log(PI);

// Data Types
/* 
    1. String
    2. Number
    3. Boolean
    4. Undefined
    5. Null   
*/

// Strings
// String is going to be inside single quotes, double quotes or back-ticks (``)

let id = 'John';
// console.log(id);

// Numbers 
// Numbers can be of 2 types: Integers and Decimals (floats)

// Integers
let age = 30;
// console.log(age);

// Floats
let gr = 1.618;
// console.log(gr);

// Booleans
// Booleans can only be 2 values: true or false

let murphyIsCool = true;
// console.log(murphyIsCool);

// Undefined
// Undefined means "not defined" or "not assigned"

let x;
// console.log(x);

// Null
// Null means it has no value and is nothing

let y = null;
// console.log(y);

// String Concatenation

// console.log("My name is " + id + " and I am " + age);

// Template Strings
// console.log(`My name is ${id} and I am ${age}`);

// typeof
// It is used to find the type of a variable
// console.log(typeof age);

// Simple Calculations

let a = 20;
let b = 10;
let c = --a;

// console.log(c);

// Add: +
// Subtract: -
// Multiply: *
// Exponentiation: **
// Divide: /
// Modulus: %
// Increment: ++
// Decrement: --

let d = 10;
d += 10; // d = d + 10;
d -= 10; // d = d - 10
d *= 10; // d = d * 10
d /= 10; // d = d / 10
// console.log(d);

// Functions
// Functions are sum specfic code that you want to use again and again in your file

function sayHello() {
    console.log("Hello, I am not a function");
}

// sayHello();

function add(num1, num2) {
    console.log(num1 + num2);
}

// add(6, 4348398);

// return
function multiply(num1, num2) {
    return num1 * num2;
}

// console.log(multiply(10, 3));

// Exercise 0: Fahrenheit to Celsius
function toCelsius(f) {
    let result = (5 / 9) * (f - 32);
    return result;
}

hundredFahr = toCelsius(50);
// console.log(hundredFahr);

// Arrays
let cars = ["Ford", "Ferrari", "BMW"];
// console.log(cars);

let fruits = new Array("Apple", "Mango", "Kiwi");
// console.log(fruits);

// Computers start counting from 0
// console.log(cars[1]); // Ferrari
cars[1] = "Mercedes";
// console.log(cars[1]); // Mercedes

// console.log(fruits.length);
// console.log(fruits.sort()); // Will sort alphabetically or numerically

let first = fruits[0];
let last = fruits[fruits.length - 1];

// Adding Array Elements

// Method 1
fruits.push("Tomato");

// Method 2
fruits[fruits.length] = "Lemon";

// Method 3
fruits.unshift("Guava");

// console.log(Array.isArray(fruits)); // Used to check if an array is an array 

// Removing Elements
fruits.pop(); // Removes the last element (lemon)

fruits.shift(); // Removes the first element from the array (Apple)

// console.log(fruits);

let dogs = ["Murphy", "Bruno", "Oliver"];
let elephants = ["Jumbo", "Jumpy", "Grumpy"];
let lions = ["Mufasa", "Simba", "Sheru"];
let pets = dogs.concat(elephants, lions);

// console.log(pets);
// console.clear();

// Slicing Elements

let names = ["John", "Peter", "Alan", "Steve"];
// let names2 = names.slice(1);
let names2 = names.slice(1,3); // Will go UPTO three, not to it
// console.log(names2);

let ages = [14, 12, 8, 7];
let sorted = ages.sort();
let reversed = ages.reverse();

// console.log(sorted);
// console.log(reversed);

// Dates
// Format: new Date(year, month, day, hours, minutes, seconds, milliseconds)

let date = new Date(2020, 11, 15, 10, 58, 16);
// console.log(date);

// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.

// console.log(Date.now());

// JavaScript Math Object

const pi = Math.PI;
// console.log(pi);

// Round of numbers
// .round()

// console.log(Math.round(4.2));

// Power
// .pow()

// console.log(Math.pow(8, 2)); // 64

// Check more at https://bit.ly/3qTmepf

// Conditionals

let num1 = 10;

// if (num1 < 10) {
//     console.log("num1 is not greater than 10");
// } 
// else if (num1 === 10) {
//     console.log("num1 is equal to 10");
// }
// else {
//     console.log("num1 is greater than 10");
// }


    // ==	
    // ===	
    // !=
    // !==	
    // >
    // <
    // >=	
    // <=	

let drivingAge = 35;

// if (!(drivingAge > 18) && drivingAge < 60 && drivingAge === 35) {
//     console.log("You can drive!");
// } else {
//     console.log("You cannot drive!");
// }

// Logical Operators
// AND (&&): Both conditions have to be true
// OR (||): Only one condition has to be true
// NOT (!): Opposite of the conditions

let day = new Date();
let today;

switch(day.getDay()) {
    case 0:
        today = "Sunday";
        break;
    case 1:
        today = "Monday";
        break;
    case 2:
        today = "Tuesday";
        break;
    case 3:
        today = "Wednesday";
        break;
    case 4:
        today = "Thursday";
        break;
    case 5:
        today = "Friday";
        break;
    case 6:
        today = "Saturday";
        break;
    default:
        today = "No Day";
}

// console.log(`Today is ${today}`);

// Loops
// Loop is used for a task that you want to do a number of times

// For loop
for (let i = 1; i < 21; i++) {
    // console.log(i);
}

// For/In Loop
let l1 = [1,2,3,4];

for (i in l1) {
    // console.log(i);
}

// While Loop
// let j = 0;
// while (j < 20) {
//     console.log(j);
//     j++;
// }

// infinite while loop
// while (true) {
//     console.log("infinite");
// }

// do while loop
// let number;
// do {
//     number = 0;
//     number++;
//     console.log(number);
// } while ()

// Arrow Functions

func1 = function() {
    return "hello";
}

func2 = () => {
    return "hello"
}

