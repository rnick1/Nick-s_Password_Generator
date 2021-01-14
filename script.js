// These variables store as an array the characters that can go into the password.
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9'
];

var specialCharacters = ['@', '%', '+', '\\', '/', '\'', '!', '#', '$', '^', '?', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_', '.',
];
// This function is designed to take the user input and store it in an object.
function getPasswordOptions() {

    var passwordLength = parseInt(prompt('How many characters would you like your password to have? Note: your password must have 8-128 characters.'));
    console.log(passwordLength);

        if (isNaN(passwordLength) === true) {
            alert('Password length must be expressed as numeric characters.');
            return;
        };

        if (passwordLength < 8) {
            alert('Password length must be between 8 and 129 characters.')
            return;
        };

        if (passwordLength > 128) {
            alert('Password length must be between 8 and 129 characters.')
            return;
        };

        if(passwordLength) {
            alert('Good! Your password will have ' + passwordLength + ' characters!')
        };

    var promptNumber = confirm('Would you like to have numbers in your password?');

        if(promptNumber) {
            alert('Good! I will add numbers to your password!')
        };

        if(promptNumber === false) {
            alert("I will not add numbers to your password.")
        };

    var promptSpecialCharacters = confirm('Would you like to have special characters in your password?');

        if(promptSpecialCharacters) {
            alert('Good! I will add special characters to your password!')
        };

        if(promptSpecialCharacters === false) {
            alert("I will not add special characters to your password.")
        };

    var promptLowerCase = confirm('Would you like to have lowercase letters in your password?');

        if(promptLowerCase) {
            alert('Good! I will add lowercase letters to your password!')
        };

        if(promptLowerCase === false) {
            alert("I will not add lowercase letters to your password.")
        };

    var promptUpperCase = confirm('Would you like to have uppercase letters in your password?');

        if(promptUpperCase) {
            alert('Good! I will add uppercase letters to your password!')
        };

        if(promptUpperCase === false) {
            alert("I will not add uppercase letters to your password.")
        };

        if (!promptNumber && !promptSpecialCharacters && !promptLowerCase && !promptUpperCase) {
            alert('Please select at least one character.');
            return;
        };

    var passwordOptions = {
        passwordLength: passwordLength,
        Numbers: promptNumber,
        Special: promptSpecialCharacters,
        Lowercase: promptLowerCase,
        Uppercase: promptUpperCase
    };
    return passwordOptions;
};
// This function takes a random character from one of the arrays.
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
};
// This function creates the password.
function generatePassword() {
    var options = getPasswordOptions();
    console.log(options);
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];

    if(options === undefined) {
        return '';
    }

    if (options.Numbers) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters))
    };

    if (options.Special) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters))
    };

    if (options.Lowercase) {
        possibleCharacters = possibleCharacters.concat(lowerCase);
        guaranteedCharacters.push(getRandom(lowerCase))
    };

    if (options.Uppercase) {
        possibleCharacters = possibleCharacters.concat(upperCase);
        guaranteedCharacters.push(getRandom(upperCase))
    };

    for (var i = 0; i < options.passwordLength; i++) {
        var randomCharacter = getRandom(possibleCharacters);

        result.push(randomCharacter);
    };

    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    };

    return result.join('');
};

var generateBtn = document.querySelector('#generate');
// This function makes the finished password show up at the right place on the webpage.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
};

document.getElementById('generate').addEventListener('click', writePassword);