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

function createGreeting(firstName, lastName, message="Hiya Man") {
    return "Listen Up " + firstName + " " + lastName + ", " + message;
}
const greeting = createGreeting("Coen", "Potgieter");
console.log(greeting);

// Syntax #2

// import greet from "./util.js";
// greet("Coeni");

import times10 from "./util.js";
console.log(times10(10));

// Syntax things














