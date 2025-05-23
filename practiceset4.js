// Write a code which give grades to students according to their score
// 90 - 100, A
// 70 - 89, B
// 60 - 69, C
// 50 - 59, D
// 0 - 49, F

{
  let marks_obtain = prompt("Enter the marks you have obtain:");
  if (marks_obtain >= 90 && marks_obtain <= 100) {
    console.log(marks_obtain, "You got grade A.");
  } else if (marks_obtain >= 70 && marks_obtain <= 89) {
    console.log(marks_obtain, "You got grade B.");
  } else if (marks_obtain >= 60 && marks_obtain <= 69) {
    console.log(marks_obtain, "You got grade C.");
  } else if (marks_obtain >= 50 && marks_obtain <= 59) {
    console.log(marks_obtain, "You got grade D.");
  } else {
    console.log(marks_obtain >= 0 && marks_obtain <= 49, "You got grade F.");
  }
}
