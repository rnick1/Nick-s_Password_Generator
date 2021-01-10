alert("Welcome to my Password Generator!");

var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);

if(isNaN(passwordLength) === true) {
  alert("Password length must be expressed as numeric characters.");
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);
}

if (passwordLength < 8) {
  alert("Password length must be between 8 and 129 characters.")
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);
}

if (passwordLength > 128) {
  alert("Password length must be between 8 and 129 characters.")
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);
}

function getPasswordOptions() {

var promptNumber = confirm("Would you like to have Numbers in your password?");

var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");
  
var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");
  
var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?");

if (!promptNumber && !promptSpecialCharacters && !promptLowerCase && !promptUpperCase) {
  alert("Please select at least one character type.");
  return getPasswordOptions;
  // var promptNumber = confirm("Would you like to have Numbers in your password?");
  // var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");
  // var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");
  // var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?");
};
};

getPasswordOptions();


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

var allFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
}

for(var i = 0; i < passwordLength; i++) {
    function getPasswordSection() {
      return (getRandomNumber() + getRandomSpecial() + getRandomUpper() + getRandomLower());
    };
    console.log(getPasswordSection());
    
    console.log(i);
  };

  getPasswordSection();








// function getPasswordSection() {
//   var completePassword = '';
// for(i = 0; i < parseInt(promptLength);i++) {
//   if (promptNumber) {
//     completePassword += getRandomNumber
//   }
//   if (promptNumber) {
//     completePassword += getRandomNumber
//   }
//   if (promptNumber) {
//     completePassword += getRandomNumber
//   }
//   if (promptNumber) {
//     completePassword += getRandomNumber
// }

//   return completePassword;
// }
// console.log(getPasswordSection());

// for (var i = 0; i < 8; i++) getPasswordSection(i);
// console.log(getPasswordSection(i));








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
