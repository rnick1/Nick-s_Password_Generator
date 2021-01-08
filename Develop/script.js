var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

var upperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

var numericCharacters = [

"1", "2", "3", "4", "5", "6", "7", "8", "9"
]

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.',
];

alert("Welcome to my Password Generator! Click the red button to get started!");

function promptNumber() {
  var userResponse = confirm("Would you like to have Numbers in your password?");
}

function promptSpecialCharacters() {
  var userResponse = confirm("Would you like to have Special Characters in your password?");
}

function promptLowerCase() {
  var userResponse = confirm("Would you like to have Lowercase Characters in your password?");
}

function promptUpperCase() {
  var userResponse = confirm("Would you like to have Uppercase Characters in your password?");
}

// if(promptNumber = true) {
//   return alert("Great! I'll add numbers to your password!");}
// else(promptNumber - false); {
//   return alert("Okay. I won't add any numbers this time.");
// }

// // // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// // }

// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)};
