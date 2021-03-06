
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Global Variables

var passwordLength = 0;
var wantsLowerCase;
var wantsUpperCase;
var wantNumbers;
var wantSpecialCharacter;

// Password prompt options

var lowerCase = ['a', 'b', 'c', 'd', 'e',  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numericOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specialCharacters = ['"', '!', '#', '$', '%', '&', '(', ')', '*',
                         '+', ',', '-', '.', '/', ':', ';', '<', '=',
                         '>', '?', '@', '[', '\\', ']',  '^', '_', '`', '{', '|', '}',
                         '~', '"'
                        ];






// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // Initialize password text area
  passwordText.value = '';

  // passwordText.value = password;
  if (!getNumberOfCharacter()) {
     return;
  };

  confirmIfUserWantsLowerCase();
  confirmIfUserWantsUpperCase();
  confirmIfUserWantsNumbers();
  confirmUserWantsSpecialCharacter();

  if (wantsLowerCase || wantsUpperCase || wantNumbers || wantSpecialCharacter) {
    var password = generatePassword();
    passwordText.value = password;
    
  }  else{
    alert('You need to choose at least one character type for your password');
  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for number of characters
function getNumberOfCharacter() {

  var howLongIsPassword = window.prompt('How long do you want the password to be ? - Length should be between 8 and 128 characters', 8);
  if (isNaN(howLongIsPassword) || howLongIsPassword.trim() === '') {
    alert('Please enter a valid number as password length');
    return false;
  }
  if (howLongIsPassword < 8 || howLongIsPassword > 128) {
    alert('Password should be between 8 and 128 characters long');
    return false;
  }   else {
    passwordLength = howLongIsPassword;
    return true;
  }
}

// Prompt for if user wants lower case letters
function confirmIfUserWantsLowerCase() {
  wantsLowerCase = window.confirm('Do you want lower case letters in your password');
}

// Prompt for if user wants upper case letters
function confirmIfUserWantsUpperCase() {
  wantsUpperCase = window.confirm('Do you want upper case letters in your password');
}

// Prompt for if user wants numbers in password
function confirmIfUserWantsNumbers() {
  wantNumbers = window.confirm('Do you want numbers in your password');
}

// Prompt for if user wants special characters
function confirmUserWantsSpecialCharacter() {
  wantSpecialCharacter = window.confirm('Do you want special characters in your password');
}

// Random Index for lower case letters
function getRandomLowerCaseChar() {
  randomIndex = Math.floor(Math.random() * 27);
  return lowerCase[randomIndex];
}

// Random Index for upper case letters
function getRandomUpperCaseChar() {
  randomIndex = Math.floor(Math.random() * 27);
  return upperCase[randomIndex];
}

// Random Index for numbers
function getRandomNumber() {
  randomIndex = Math.floor(Math.random() * 9);
  return numericOptions[randomIndex];
}

// Random Index for special Characters
function getRandomSpecialCharacter() {
  var sCharLength = specialCharacters.length - 1;
  randomIndex = Math.floor(Math.random() * sCharLength);
  return specialCharacters[randomIndex];
}


// Generate password

function generatePassword() {
  var result = [];
  var i = 0;
  while (i < passwordLength) {

    if (wantsLowerCase) {
      result.push(getRandomLowerCaseChar());
      i++;
    }

    if (wantsUpperCase) {
      result.push(getRandomUpperCaseChar());
      i++;
    }

    if (wantNumbers) {
      result.push(getRandomNumber());
      i++;
    }

    if (wantSpecialCharacter) {
      result.push(getRandomSpecialCharacter());
      i++;
    }
    
  }

  return result.join('');
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
