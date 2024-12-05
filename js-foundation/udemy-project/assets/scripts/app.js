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

// Playing with .findIndex()
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

// Playing with .map()

const randomNums = [1, 78, 90, 1, 901, 1000];
const sqauredRandomNums = randomNums.map(num => num*num);
console.log(sqauredRandomNums);

const bunchOfHellos = randomNums.map(() => "Hello");
console.log(bunchOfHellos);




// let mutableNumbers = [10, 23, 54];


// hobbies[1] = "Port";
// console.log(hobbies[1]);

// mutableNumbers[0] = 11;
// console.log(mutableNumbers[0]);

// let expArray = [1, "HIYA"];
// console.log(expArray[0]);
// console.log(expArray[1]);








