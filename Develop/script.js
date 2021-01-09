var allFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
}

// Generator functions - http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSpecial() {
  var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.',];
  return special [Math.floor(Math.random() * special.length)];
}
console.log(getRandomSpecial());

// var lowerCase = [
//   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// ]

// var upperCase = [
//   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
// ]

// var numericCharacters = [

// "1", "2", "3", "4", "5", "6", "7", "8", "9"
// ]

// var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.',
// ];
alert("Welcome to my Password Generator!");

var promptLength = prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters.");

var promptNumber = confirm("Would you like to have Numbers in your password?");

var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");
  
var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");
  
var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?")


// for (var i = 0; i = 7; i++){

// var randomNumber = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
// console.log(randomNumber)
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
