// Data types in js
// 1.Primitive: Number, String, Boolean, Undefined, Null, BigInt, Symbol
// 2. Non-primitive: Objects(Arrays, functions);

// Number
{
  let x = 5;
  console.log(x);
  console.log(typeof x);
}
// string
let name = "NirajTharu";
console.log(name);
console.log(typeof name);

// Boolean
let isActive = true;
console.log(isActive);
console.log(typeof isActive);

// Undefined
let x;
console.log(x);
console.log(typeof x);

//Null
{
  let y = null;
  console.log(y);
  console.log(typeof y);
}

//BigInt: If it is big int then it contains 'n' at the last of the number
let y = BigInt("35324");
console.log(y);
console.log(typeof y);

// symbol
let b = Symbol("niraj1234");
console.log(b);
console.log(typeof b);

// Objects: collection of values (key: value pair)
const student = {
  fullName: "NirajTharu",
  age: 21,
  semester: "5th",
  isStudying: true,
};
console.log(student);
console.log(typeof student);
console.log(student["age"]);
console.log(student.fullName);
