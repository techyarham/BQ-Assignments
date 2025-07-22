// 1) Write a program that checks whether a number is even or odd.
// let num = 19;
// if (num % 2 === 0) {
//     console.log("Even Number");
// }
// else {
//     console.log("Odd Number");
// }

//2) If someone's age is more than or equal to 18, print "Eligible to vote", 
// otherwise print "Not eligible".
// let age = 10;
// if (age >= 18) {
//     console.log("Eligible to vote");
// }
// else {
//     console.log("Not Eligible");
// }

//3) Print numbers from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//     console.log("i=", i);
// }

//4) Print even numbers between 1 to 20 using a while loop.
// let i = 1
// while (i <= 20) {
//     console.log("i=", i);
//     i++;
// }

// 5) Print the reverse of a given string using a for loop.
// let str = "hello";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }
// console.log(reversed);

// 6) Write a function that adds two numbers and returns the result.
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3));

// 7) Write a function that returns the factorial of a number.
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));

// 8) Write a function that checks if a given string is a palindrome (e.g., "madam").
//  function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome("madam"));

// 9) Create an object student with the following properties:(name, rollNo, marks, isPassed)
// const student = {
//     name: "Ali",
//     rollNo: 101,
//     marks: 85,
//     isPassed: true
// };

// 10) Access the properties of the student object using dot and bracket notation.
// console.log(student.name);
// console.log(student["marks"]);

//11) Add a method inside the student object that prints:
// "Hello, I am [name]"
// student.greet = function () {
//     console.log(`Hello, I am ${this.name}`);
// };
// student.greet();

//12) Create a function that takes an object and prints all keys and values using a loop.
// function printObject(obj) {
//     for (let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }
// printObject(student);

//13) Create an array of your favorite fruits.
// let fruits = ["apple", "mango", "orange"];

//14) Add a new fruit to the array.
// fruits.push("kela");
// console.log(fruits);

//15) Remove the last fruit from the array.
// fruits.pop();
// console.log(fruits);

//16) Check if "banana" is present in the array using .includes().
// console.log(fruits.includes("banana"));

//17) Create an array of numbers. Return a new array where each number is multiplied by 2.
// let nums = [1, 2, 3];
// let doubled = nums.map(n => n * 2);
// console.log(doubled); 

//18) Create an array of ages. Return only those who are 18 or older.
// let ages = [15, 22, 17, 30];
// let adults = ages.filter(age => age >= 18);
// console.log(adults);

//19) Use .find() to get the first number greater than 10 from an array.
// let numbers = [3, 7, 12, 5];
// let found = numbers.find(n => n > 10);
// console.log(found);

//20) Use .forEach() to print every name from an array of names.
// let names = ["Ali", "Zara", "Umar"];
// names.forEach(name => console.log(name));

//21) Use .map() to return an array of only student names.
// const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Zara", marks: 95 },
//     { name: "Umar", marks: 45 }
// ];
// let namesOnly = students.map(s => s.name);
// console.log(namesOnly);

//22) Use .filter() to return students who scored more than 50.
// let passed = students.filter(s => s.marks > 50);
// console.log(passed);

//23) Use .find() to get the student whose name is "Zara".
// let zara = students.find(s => s.name === "Zara");
// console.log(zara);

//24) Use .forEach() to print each student’s name and marks.
// students.forEach(s => {
//     console.log(`${s.name} - ${s.marks}`);
// });

//25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.
// let arr = [2, 4, 6, 8];
// let squared = arr.map(n => n * n);
// console.log(squared);

//26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.
// let people = ["Ali", "Zara", "Umar", "Ahmed"];
// people.forEach(name => console.log(name));

//27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.
// let ageList = [12, 25, 17, 20, 16, 30];
// let above18 = ageList.filter(age => age > 18);
// console.log(above18);
//28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].
// let myFruits = ["banana", "mango", "grapes", "apple"];
// console.log(myFruits.includes("apple")); 

//29) From the following list, find the first student who scored more than 90:
// let result = [
//     { name: "Ali", marks: 75 },
//     { name: "Zara", marks: 92 },
//     { name: "Umar", marks: 85 }
// ];
// let topper = result.find(s => s.marks > 90);
// console.log(topper);

//30) You have an array [200, 150, 300, 100]. Return the total sum.
// let prices = [200, 150, 300, 100];
// let total = prices.reduce((sum, val) => sum + val, 0);
// console.log(total);

//31) From this array:....Return a new array of only usernames.
// let users = [
//     { id: 1, username: "ali123" },
//     { id: 2, username: "zara88" },
//     { id: 3, username: "umar_01" }
// ];
// let usernames = users.map(u => u.username);
// console.log(usernames);

//32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
// let allNums = [1, 2, 3, 4, 5, 6];
// let odds = allNums.filter(n => n % 2 !== 0);
// console.log(odds); 

//33) Count how many vowels are present in the string "javascript".
// let text = "javascript";
// let vowels = "aeiou";
// let count = 0;
// for (let char of text) {
//     if (vowels.includes(char)) count++;
// }
// console.log(count);


//34) Loop through this array and log:
/*let tasks = [
    { task: "Assignment", completed: true },
    { task: "Homework", completed: false }
];
tasks.forEach(t => {
    console.log(`Task: ${t.task} - Status: ${t.completed ? "Completed" : "Incomplete"}`);
});*/


//35) From a list of employees, return a new array that adds a new field:"status": "active" to each object.
/*let employees = [
  { name: "Ali" },
  { name: "Zara" }
];
let updatedEmployees = employees.map(emp => ({ ...emp, status: "active" }));
console.log(updatedEmployees);*/












