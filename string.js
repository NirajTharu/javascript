// Sequence of the characters used to represent text
// srt(name of the string).length
// The strings have inbuilt properties(variables) and functions-> (methods)
{
  let a = "Pumpkin";
  console.log(a);
  console.log(a.length);
}

// for the index or indices of the string
{
  let name = "Niraj Tharu";
  console.log(name[6]);
}

// Template literals in Js: special types of a string which is created with the symbol(`) and inside that we can embedded the expression.
// String interpolation:To create a string by substitution of a placeholder: ${college.location}
// A way to have embedded expressions in stings
{
  let college = {
    name: "Siddhanath Science Campus",
    location: "Bhimdatta,Kanchanpur",
  };
  let output = `The location of my college is: ${college.location}`; //This is string literals
  console.log("The name of my college is", college.name);
  console.log(output);
}

// Scape character: "\n","\t" only one count is counted.
{
  let str1 = "Table\nName";
  let str2 = "Apple\tJuice";
  console.log(str1);
  console.log(str1.length);
  console.log(str2);
  console.log(str2.length);
}

// String method or functions: to manipulate a string
// Strings are immutable: Does not change its original one, make a copy and then make change in that copy
{
  let s = "  Apple is good for health.  ";
  console.log(s);
  console.log(s.toUpperCase());
  console.log(s.toLowerCase());
  console.log(s.trim()); //Trim the white space from the beginning and end of the string
}

// concat of the strings
{
  let a = "abcdefghijk";
  let b = "123";
  console.log(a + b);
  console.log(a.slice(0, 4)); //The ending value in noninclusive
  let c = a.concat(b); //For adding two strings
  console.log(c);
}

{
  let fruit = "Apple";
  //   This will replace only one character of the string
  console.log(fruit.replace("p", "r"));
  //   This will replace all the character of the string
  console.log(fruit.replaceAll("p", "a"));
  //   To find the character at some index
  console.log(fruit.charAt(2));
}
