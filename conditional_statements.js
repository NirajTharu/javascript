// Conditional statements
// To implement some condition in the

// if Statement
{
  let age = 15;
  if (age >= 15 && age <= 25) {
    console.log("You are young now!");
  }
}

//if-else statements
{
  let age = 2;
  if (age >= 18) {
    console.log("You can Vote!");
  } else {
    console.log("You cannot vote!");
  }
}

//if-else statement: 1.Odd or even
{
  let num = 45;
  if (num % 2 === 0) {
    console.log("Is even!");
  } else {
    console.log("Is odd!");
  }
}

// else-if Statement
{
  let mode = "pink";
  let color;
  if (mode === "dark") {
    color = "black";
  } else if (mode === "white") {
    color = "white";
  } else if (mode === "green") {
    color = "green";
  } else if (mode === "pink") {
    color = "pink";
  } else {
    color === "light-pink";
  }
  console.log(color);
}

// Ternary operators: operates in three operant
// Syntax:condition? true output:false output
{
  let age = 5;
  age > 5 ? console.log("adult") : console.log("Not Adult!");
}
