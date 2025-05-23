// Loops are used to execute a piece of code again & again

// For Loop
// initialization let i=0;
// Termination condition i<=6;
// Update condition i++;
// for(let i=0;i<=6;i++)

{
  let i = 0;
  for (i = 0; i <= 5; i++) {
    console.log("NirajTharu");
  }
}

// while loop syntax:
// while (condition) {
//    do some work
// }

{
  let i = 0;
  while (i <= 5) {
    console.log("Help Me!");
    i++;
  }
}

// do-while loop
{
  let i = 0;
  do {
    console.log("print1");
    i++;
  } while (i <= 10);
}

// for-of loop: mostly used for iteration in the arrays and strings

let str = "Niraj";
let length = 0;
for (let i of str) {
  console.log("i=", i);
  length++;
}
console.log("length=", length);

// for-in loop: mostly used for the objects
// & returns keys mostly

let student = { fullname: "NirajTharu", rollNo: 20, age: 21, semester: 5 };
for (let key in student) {
  console.log(key, student[key]);
}
