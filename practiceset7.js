/*Q.Prompt the user to enter their full name. Generate a username fo them based on the input. Start username with @, followed by their full
 and ending with the fullname length.*/
// eg: user name ="NirajTharu", username should be "@nirajtharu"

let username = prompt("Enter your full name");
username = username.toLowerCase();
username = console.log("The user name is:", "@" + username + username.length);
