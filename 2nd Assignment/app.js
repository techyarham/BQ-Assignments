// 1) Unique Words Counter
// const text ="JavaScript is great and JavaScript is powerful";
// function uniqueWordCounter(str){
//     const words = str.split(" ");
//     const wordCount ={};
//     words.forEach(word => {
//         if (wordCount[word]){
//             wordCount[word]++;
//         }
//         else{
//             wordCount[word] = 1;
//         }
//     });
//     return wordCount;
// }
// console.log(uniqueWordCounter(text));


// 2) Group Students by Class
// const students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" }
// ];
// function groupByClass(students) {
//   const result = {};
//   students.forEach(student => {
//     const cls = student.class;
//     if (!result[cls]) {
//       result[cls] = [];
//     }
//     result[cls].push(student);
//   });
//   return result;
// }
// console.log(groupByClass(students));


// 3) Filter Products by Price Range
// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];
// function filterByPrice(min, max) {
//   return products.filter(p => p.price >= min && p.price <= max);
// }
// console.log(filterByPrice(100, 600));


//  4) Check Palindrome Using Function
// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome("madam")); // true


//  5) Flatten Array
// const nestedArray = [1, [2, [3, 4]], 5];
// function flatten(arr) {
//   return arr.flat(Infinity);
// }
// console.log(flatten(nestedArray));


//  6) Total Salary Calculation 
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];
// const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
// console.log(totalSalary);


// 10) Sum of All Even Numbers in Nested Array
// const data = [1, 2, [4, 5, [6, 8]], 10];
// function sumEven(arr) {
//     return arr.flat(Infinity).reduce((sum, num) => {
//         return num % 2 === 0 ? sum + num : sum;
//     }, 0);
// }
// console.log(sumEven(data));


// 11) Rest Operator in Function
// function average(...numbers) {
//   const total = numbers.reduce((sum, n) => sum + n, 0);
//   return total / numbers.length;
// }
// console.log(average(2, 4, 6, 8));

//  12) Frequency Count with Spread
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const freq = [...arr].reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(freq);


// 13. Toggle Status
// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true },
// ];
// function toggleTaskStatus(id) {
//   return tasks.map(task =>
//     task.id === id ? { ...task, done: !task.done } : task
//   );
// }
// console.log(toggleTaskStatus(1));


// 14. Sort by Name Length
// const names = ["Ali", "Zara", "Ahmed", "Usman"];
// const sorted = [...names].sort((a, b) => a.length - b.length);
// console.log(sorted);
