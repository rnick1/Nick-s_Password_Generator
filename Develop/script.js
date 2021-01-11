var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var numericCharacters = [

"1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.',
];

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

  var promptNumber = confirm("Would you like to have Numbers in your password?");
  var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");
  var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");
  var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?");
  
if (!promptNumber && !promptSpecialCharacters && !promptLowerCase && !promptUpperCase) {
  alert("Please select at least one character type.");
  var promptNumber = confirm("Would you like to have Numbers in your password?");
  var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");
  var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");
  var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?");
};

var getPasswordOptions = {
  Length: passwordLength,
  Numbers: promptNumber,
  Special: promptSpecialCharacters,
  Lowercase: promptLowerCase,
  Uppercase: promptUpperCase
};

console.log(getPasswordOptions.Length);
console.log(getPasswordOptions.Numbers);
console.log(getPasswordOptions.Special);
console.log(getPasswordOptions.Lowercase);
console.log(getPasswordOptions.Uppercase);



function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  
  return randElement;
}

var options = getPasswordOptions;
var result = [''];
var possibleCharacters = [''];
var guaranteedCharacters = [''];

function writePassword() {
  var myPassword = [''];
  if (getPasswordOptions.Numbers) {
    possibleCharacters = possibleCharacters.concat(getPasswordOptions.Numbers);
    guaranteedCharacters.push(getRandom(getPasswordOptions.Numbers))};

  if (getPasswordOptions.Special) {
    possibleCharacters = possibleCharacters.concat(getPasswordOptions.Special);
    guaranteedCharacters.push(getRandom(getPasswordOptions.Special))};

  if (getPasswordOptions.Lowercase) {
    possibleCharacters = possibleCharacters.concat(getPasswordOptions.Lowercase);
    guaranteedCharacters.push(getRandom(getPasswordOptions.Lowercase))};

  if (getPasswordOptions.Uppercase) {
    possibleCharacters = possibleCharacters.concat(getPasswordOptions.Uppercase);
    guaranteedCharacters.push(getRandom(getPasswordOptions.Uppercase))};
    
    return myPassword
  };

for (var i = 0; i < options.length; i++) {
  var possibleCharacters = getrandom(possibleCharacters);

  result.push(possibleCharacters);
}

for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = myPassword();
  var passwordText = document.querySelector('#password');
  passwordText = myPassword;
}

document.getElementById("generate").addEventListener("click", writePassword)

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
