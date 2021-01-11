// alert("Welcome! After following the prompts, please press the red button to get your password!");

// var passwordLength = prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters.");
// console.log(passwordLength);

// if(passwordLength < 8) {
//     alert("Your password must have 8 or more characters");
//     prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters.");
// } else if(passwordLength > 128) {
//     alert("Your password must have fewer than 128 characters");
//     prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters.");
// }else if(passwordLength === String)
//     alert("Please enter a numeric value");
//     prompt("How many characters would you like your password to have? Note: your password must have 8-128 characters.");









// function getPasswordSection() {
//   var completePassword = '';
// for(i = 0; i < parseInt(promptLength);i++) {
//   if (passwordLength) {
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
// }}}

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

var options = [lowerCase, upperCase, numericCharacters, specialCharacters];

alert("Welcome to my Password Generator!");

function getPasswordOptions() {
    var length = parseInt(prompt('How many characters would you like your password to contain?'));
};

if (isNaN(length) === true) {
    alert('Password length must be provided as a number.');
    return;
};

if (length < 8 ) {
    alert('Password length must be at least 8 characters.');
    return;
};

if (length > 128) {
    alert('Password length must be less than 128 characters');
    return;
};

var promptNumber = confirm("Would you like to have Numbers in your password?");

if (!promptNumber) {
    var noNum = options.slice(0,1,3);
};

var promptSpecialCharacters = confirm("Would you like to have Special Characters in your password?");

if (!promptSpecialCharacters) {
    var noNum = options.slice(0,1,2);
}
  
var promptLowerCase = confirm("Would you like to have Lower Case Letteres in your password?");

if (!promptLowerCase) {
    var noNum = options.slice(1,2,3);
}
  
var promptUpperCase = confirm("Would you like to have Upper Case Letters in your password?")

if (!promptUpperCase) {
    var noNum = options.slice(0,2,3);
}

if (
    promptNumber === false &&
    promptSpecialCharacters === false &&
    promptLowerCase === false &&
    promptUpperCase === false
) {
    alert('Must select at least one character type');
    return;
}
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log(getRandomLower());

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// console.log(getRandomUpper());

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log(getRandomNumber());

// function getRandomSpecial() {
//   var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.',];
//   return special [Math.floor(Math.random() * special.length)];
// }
// console.log(getRandomSpecial());

// var allFunctions = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   special: getRandomSpecial
// }

// for(var i = 0; i < passwordLength; i++) {
//     function getPasswordSection() {
//       return (getRandomNumber() + getRandomSpecial() + getRandomUpper() + getRandomLower());
//     };
//     console.log(getPasswordSection());
    
//     console.log(i);
//   };

//   getPasswordSection();


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





