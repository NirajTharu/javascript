// To read the details of a user from terminal

const userDetils = require("readline-sync");

const userName = userDetils.question("My i know you name? ");
const userAge = userDetils.question("You age please! ");

console.log(`Welcome Back ${userName}.`);
console.log(`Your DOB is ${2026 - userAge}`);
