// Q. Create a game where you start with any random game number & ask the user to keep guessing the game number until the
// user enters the correct value.

let num = 55;
let userNum = prompt("Guess the number form 0 - 100:");
console.log("Your Entered number is:", userNum);

while (num != userNum) {
  userNum = prompt("Wrong guess! please again guess the number form 0 - 100:");
}

console.log("Congrats you guess the correct number.", num);
