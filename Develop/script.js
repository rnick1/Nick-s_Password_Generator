// This is the collection of variables that will are available for generating passwords.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.',
];

// Welcome message.
alert("Welcome to my Password Generator!");

// Prompts user to specify a password length. "If" statements are to prevent the wrong kind of user input. 
var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);

if(isNaN(passwordLength) === true) {
  alert("Password length must be expressed as numeric characters.");
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);
};

if (passwordLength < 8) {
  alert("Password length must be between 8 and 129 characters.")
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);
};

if (passwordLength > 128) {
  alert("Password length must be between 8 and 129 characters.")
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters."));
  console.log(passwordLength);
};

// Asks if user wants numbers, special characters, lowercase, and uppercase numbers in their password.
  var promptNumber = confirm("Would you like to have Numbers in your password?");
  var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");
  var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");
  var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?");

 //This is to prevent the user from requesting a password that does not have any criteria. 
if (!promptNumber && !promptSpecialCharacters && !promptLowerCase && !promptUpperCase) {
  alert("Please select at least one character type.");
  var promptNumber = confirm("Would you like to have Numbers in your password?");
  var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");
  var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");
  var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?");
};

// This object stores the user inputs.
var passwordOptions = {
  Length: passwordLength,
  Numbers: promptNumber,
  Special: promptSpecialCharacters,
  Lowercase: promptLowerCase,
  Uppercase: promptUpperCase
};
// Console.log used as a checkpoint to make sure the code works.
console.log(passwordOptions.Length);
console.log(passwordOptions.Numbers);
console.log(passwordOptions.Special);
console.log(passwordOptionss.Lowercase);
console.log(passwordOptions.Uppercase);
// This is where the real work begins...this pulls a random character from one of the arrays.
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  
  return randElement;
}
// These variables are supposed to store the collections of characters that will make up the password.
var options = getPasswordOptions;
var result = [''];
var possibleCharacters = [''];
var guaranteedCharacters = [''];
// This function is supposed to take the random characters taken from the arrays and concatenate them.
var myPassword = [''];

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
    
    return myPassword;
  };
// These for loops make the function above run the proper number of times so that enough characters of the correct type are assembled.
for (var i = 0; i < options.length; i++) {
  var possibleCharacters = getrandom(possibleCharacters);

  result.push(possibleCharacters);
}

for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}
// Most of this code was provided in the assignment. I am a little fuzzy on what some of it means, but essentially in makes it so that when the red "generate password" button is clicked, the new password is displayed.
var generateBtn = document.querySelector('#generate');

function writePassword(password) {
  var password = myPassword;
  var passwordText = document.querySelector('#password');
  passwordText = myPassword;
}

document.getElementById("generate").addEventListener("click", writePassword)
// Here is a copy of the original code included with the assignment:

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
