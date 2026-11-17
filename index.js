// Part1

// 1. Convert the string "123" to a number and add 7.
// let str = "123";
// let result = Number(str) + 7;
// console.log(result1);

// 2. Check if the given variable is falsy and return "Invalid" if it is.
// let falsy = 1;
// let result = falsy ? falsy : "Invalid";
// console.log(result);

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 4. Create an array of numbers and return only the even numbers using filter method. 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr.filter(num => num % 2 === 0);
// console.log(result);

// 5. Use the spread operator to merge two arrays, then return the merged array.
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let result = [...arr1, ...arr2];
// console.log(result);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
// let daynum = 3;
// switch (daynum) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid input");
// }

// 7. Create an array of strings and return their lengths using map method 
// let arr = ["Kandil", "ba2", "Togg", "day"];
// let stringLength = arr.map(word => word.length);
// console.log(stringLength);

// 8. Write a function that checks if a number is divisible by 3 and 5.
// let num = 30;
// function isDivisibleBy3And5(num) {
//     return num % 3 === 0 && num % 5 === 0;
// }
// console.log(isDivisibleBy3And5(num));

// 9. Write a function using arrow syntax to return the square of a number
// let num = 8;
// let square = num => num * num;
// console.log(square(num));

// 10. Write a function that destructures an object to extract values and returns a formatted string.
// let person = {
//     name: "Kandil",
//     age: 25,
//     city: "Cairo"
// };
// console.log(`${person.name}` + " " + "is" + " " + `${person.age}` + " " + "years old");

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum.
// function sumAll(...nums){
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     return sum;
// }   
// console.log(sumAll(1, 2, 3, 4, 5));
 
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
// function wait3Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }
// wait3Seconds().then(msg=>console.log(msg));

// 13. Write a function to find the largest number in an array. 
// let arr = [1, 2, 3, 4, 5, -1, 9];
// function findLargest(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargest(arr));

// 14. Write a function that takes an object and returns an array containing only its keys.
// let obj = {
//     name: "Kandil",
//     age: 25,
//     city: "Cairo"
// };
// function getKeys(obj) {
//     return Object.keys(obj);
// }
// console.log(getKeys(obj));

// 15. Write a function that splits a string into an array of words based on spaces.
// let str = "Hello World";
// function splitString(str) {
//     return str.split(" ");
// }
// console.log(splitString(str));

// Part2

// 1. What is the difference between forEach and for...of? When would you use each?
// forEach: An array method that runs a callback function for every element.
//  You cannot stop it early with break or return, and it does not wait for await inside async functions. Use it when you want to perform an action on every item in an array cleanly.

// for...of: A loop that iterates over iterable objects (arrays, strings, maps, sets, etc.). You can use break and return, and it works with await in async functions.
//  Use it when you need more control over the loop (like stopping early or awaiting async operations inside the loop).

// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
// Hoisting is the process by which JavaScript initializes all the variables and functions before the code starts executing. 
// This means that you can use variables and functions before they are declared in the code.
// For example:
// console.log(x);
// var x = 10;
// The output of this code will be 10 because the variable x is hoisted to the top of the code.
// The Temporal Dead Zone (TDZ) is the area of code where the variable is not yet initialized.
// This means that you cannot use variables in the TDZ.
// For example:
// console.log(x);
// let x = 10;
// The output of this code will be undefined because the variable x is in the TDZ.

// 3. What are the main differences between == and ===?
// == is the loose equality operator. It checks if two values are equal, but it does not check their types.
// === is the strict equality operator. It checks if two values are equal and if their types are also equal.
// For example:
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false

// 4. Explain how try-catch works and why it is important in async operations.
// The try block wraps code that might fail, and if an error occurs, execution jumps to the catch block so the program does not crash.
// In async/await operations (like fetching data from an API), network failures or rejected promises throw errors that try-catch cleanly captures and handles (for example, showing a friendly error message to the user). 

// 5. What’s the difference between type conversion and coercion? Provide examples of each.
// Type Conversion (Explicit): When the developer manually changes a value's data type using built-in functions. Example: Number("42") becomes 42.
// Type Coercion (Implicit): When JavaScript automatically converts data types during an operation. Example: 5 + "5" becomes "55" (String coercion).

