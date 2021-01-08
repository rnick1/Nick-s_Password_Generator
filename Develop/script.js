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



alert("Welcome to my Password Generator!");

var promptLength = prompt("How many characters would you like your password to have? Note: your password must have between 7-129 characters.");

if(promptLength === false) {
  alert("You must specify a length for your password.")
}

// if(promptLength < 8 ) {
//   alert("Your password must contain 8 or more characters.")
// }

// if(promptLength > 128 ) {
//   alert("Your password must contain 128 or fewer characters.")
// }

var promptNumber = confirm("Would you like to have Numbers in your password?");

var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");

var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");

var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?")

if(promptLength === true){

}

console.log(Math.round(Math.random() * 10))



// function promptNumber() {
//   var wantsNumbers = confirm("Would you like to have Numbers in your password?");
// }

// function promptSpecialCharacters() {
//   var wantsSpecial = confirm("Would you like to have Special Characters in your password?");
// }

// function promptLowerCase() {
//   var wantsLower = confirm("Would you like to have Lowercase Characters in your password?");
// }

// function promptUpperCase() {
//   var wantsUpper = confirm("Would you like to have Uppercase Characters in your password?");
// }

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
