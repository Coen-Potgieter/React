// -------------- Export & Import -------------- 
// Method #1
// import { apiKey, abc, myNumber } from "./util.js";

// console.log(apiKey);
// console.log(abc);
// console.log(myNumber);

// // Method #2
// import * as myUtils from "./util.js";

// console.log(myUtils.apiKey);
// console.log(myUtils.abc);
// console.log(myUtils.myNumber);

// ------------- Variables & Values ------------

// let mutableNum = 10;
// const immutableNum = 100;
// mutableNum += 1;

// console.log(mutableNum);
// console.log(immutableNum);

// console.log("hi" + "bro");

// ------------- Functions ------------

// Syntax #1

// function createGreeting(firstName, lastName, message="Hiya Man") {
//     return "Listen Up " + firstName + " " + lastName + ", " + message;
// }
// const greeting = createGreeting("Coen", "Potgieter");
// console.log(greeting);

// // Syntax #2

// // import greet from "./util.js";
// // greet("Coeni");

// import times10 from "./util.js";
// console.log(times10(10));


// ------------- Objects ------------

// // Method #1
// const user = { 
//     userName: "Coeni12", 
//     password: "myPassword", 
//     age: 21,
//     greet() {
//         console.log("Hello From " + this.userName);
//     }
// };

// console.log(user.age);
// user.greet();

// // Method #2

// class User {
//     constructor(inpName, inpPassword, inpAge) {
//         this.userName = inpName;
//         this.password = inpPassword;
//         this.age = inpAge;
//     }
//     greet() {
//         console.log("Hello From " + this.userName);
//     }
// }

// // Creating a `user` object using the class
// const myUser = new User("Coenie31", "strongPassword", 22);
// console.log(myUser.age);
// myUser.greet();


// ------------- Arrays ------------

// const hobbies = ["Coding", "Chess", "Getting Injured"];
// console.log(hobbies[0]);
// hobbies[0] = "Coding js";
// console.log(hobbies[0]);

// const hobbies2 = [];
// hobbies2[0] = "Coding";
// hobbies2[1] = "Chess";
// hobbies2[2] = "Getting Injured";
// console.log(hobbies2[2]);

// const eclecticArray = [1, "String Now?", true, null];
// console.log(eclecticArray[0]);
// console.log(eclecticArray[1]);
// console.log(eclecticArray[2]);
// console.log(eclecticArray[3]);

// // `.findIndex()`
// const myWords = ["ball", "yoyo", "toothpaste"];

// const yoyoIdx = myWords.findIndex(item => item === "yoyo");
// console.log(yoyoIdx); // Outputs 1

// // When Find Fails
// const notFoundIdx = myWords.findIndex(item => item === "Does Not Exist");
// console.log(notFoundIdx); // Outputs -1

// // Finding by some condition and early stopping
// const myNums = [89, 99, 101, 110];
// const biggerThan100 = myNums.findIndex(number => number > 100);
// console.log(biggerThan100); // Outputs 2

// // More complex Condition
// const evensAndOdds = [1,-1,3,4,5,6,7,8,9,10];
// const evenIdx = evensAndOdds.findIndex( number => (number % 2) === 0);
// console.log(evenIdx); // Outputs 3

// // Simply prints every element
// evensAndOdds.findIndex( num => {
//     console.log(num);
// });

// // `.map()`
// const randomNums = [1, 78, 90, 1, 901, 1000];
// const sqauredRandomNums = randomNums.map(num => num*num);
// console.log(sqauredRandomNums);

// const bunchOfHellos = randomNums.map(() => "Hello");
// console.log(bunchOfHellos);

// // `.find()`
// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const elemBiggerThan5 = myNums.find(num => num > 5);
// console.log(elemBiggerThan5); // Outputs 6

// // `.filter()`
// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrBiggerThan5 = myNums.filter(num => num > 5);
// console.log(arrBiggerThan5); // Outputs [6, 7, 8, 9, 10]

// // `.reduce()`
// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrSum = myNums.reduce((runningSum, currNum) => runningSum + currNum, 0);
// console.log(arrSum); // Outputs 55

// `.concat()`
// const myNums1 = [ 1, 2, 3];
// const myNums2 = [ 4, 5, 6];
// const combindedNums = myNums1.concat(myNums2, [7, 8]);
// console.log(combindedNums); // Outputs [1, 2, 3, 4, 5, 6, 7, 8]

// // `.slice()`
// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mySlicedNums = myNums.slice(1, 4);
// console.log(mySlicedNums); // Outputs [2, 3, 4]
// myNums[1] = 10;
// console.log(mySlicedNums); // Outputs [2, 3, 4] (Primitive elements)

// const myArrs = [[1, 2], [3, 4], [5, 6]];
// const mySlicedArrs = myArrs.slice(0, 2);
// console.log(mySlicedArrs); // Outputs [[1, 2], [3, 4]]
// myArrs[0][0] = 7;
// console.log(mySlicedArrs); // Outputs [[7, 2], [3, 4]] (Reference elements)

// // `splice()`
// const myNums = [1, 4, 5];
// // Adding elements at index 1
// myNums.splice(1, 0, 2, 3); // Start at index 1, replace next 0 elements, with [2, 3]
// console.log(myNums); // Outpus [1, 2, 3, 4, 5]

// // Removing elements 
// myNums.splice(3, 2); // Start at index 3, replace next 2 elements, with []
// console.log(myNums); // Outpus [1, 2, 3]

// // Replacing elements 
// myNums.splice(1, 2, 4, 5); // Start at index 1, replace next 2 elements, with [4, 5]
// console.log(myNums); // Outpus [1, 4, 5]

// ------------- Destructuring ------------

// const fullName = ["Coen", "Potgieter"];
// const fName = fullName[0];
// const lName = fullName[1];
// console.log(fName);
// console.log(lName);

// const fullName = ["Coen", "Potgieter"];
// const [fName, lName] = fullName;
// console.log(fName);
// console.log(lName);

// const [fName, lName] = ["Coen", "Potgieter"];
// console.log(fName);
// console.log(lName);

// const user = {
//     userName: "Coen",
//     userAge: 21
// }
// const { userName, userAge } = user;
// console.log(userName);
// console.log(userAge);

// const { userName, userAge }= {
//     userName: "Coen",
//     userAge: 21
// }
// console.log(userName);
// console.log(userAge);

// const { userName: nameAlias, userAge }= {
//     userName: "Coen",
//     userAge: 21
// }
// console.log(nameAlias);
// console.log(userAge);


// ------------- Spread Operator ------------


// // Combining Arrays
// const arr1 = ["Hiya", "World"];
// const arr2 = ["Extra Word"];
// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr);

// // Combining Objects
// const obj1 = { userName: "Coen12", userPassword: "strongPassword" };
// const obj2 = { age: 21 };
// const combinedObj = { ...obj1, ...obj2 };
// console.log(combinedObj);

// // Function Calls
// function add3Nums(a, b, c) {
//     return a + b + c;
// }
// const myNums = [1,2,3];
// console.log(add3Nums(...myNums));

// // Spread String into array of chars
// const myString = "Hello World";
// const myStringArr = [...myString];
// console.log(myStringArr);

// ------------- Statements ------------

// If Statements
// const inpPassword = prompt("Fill in Your Password");
// if (inpPassword === "password12") {
//     console.log("Access Granted");
// } else if (inpPassword === "Password12") {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }

// // For Loops (Normal)
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// // For Loops (Range-Based)
// const myArr = ["Hello", "World", "Extra", "Words With Space"];
// for (const elem of myArr) {
//     console.log(elem);
// }


// ------------- Misc Things ------------

// // Passing Functions
// function handleTimeOut(func) {
//     // Wait x amount of time
//     func();
// }
// function notifyTimeUp() {
//     console.log("Time is up!");
// }
// const notifyTimeUpVar = () => {
//     console.log("Time is up!");
// }

// // Pass in function with no parenthesis
// handleTimeOut(notifyTimeUp);
// // Pass in function stored as var like a normal var
// handleTimeOut(notifyTimeUpVar);
// // Alternatively we could define the function in the parameter list
// handleTimeOut(() => { console.log("Time is up!"); });

// Nested Functions
// function init() {
//     function greet() {
//         console.log("Hiya");
//     }
//     greet();
// }
// init();

// // Can't call `greet()` from outside the `init()` function
// // greet(); // Error











