// Get user to input a number using prompt ("Enter a number"). Check if the number is a multiple of 5 or not.

// Prompt is for the one time popup message and can ask for the input.
{
  let num = prompt("Enter a number:");
  if (num % 5 === 0) {
    console.log(num, "is multiple of 5.");
  } else {
    console.log(num, "Is not multiple of 5.");
  }
}
