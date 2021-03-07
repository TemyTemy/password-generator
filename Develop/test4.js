// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = 0;
// var wantsLowerCase;
// var wantsUpperCase;
// var wantNumbers;
// var wantSpecialCharacter;

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

  // confirmIfUserWantsLowerCase();
  // confirmIfUserWantsUpperCase();
  // confirmIfUserWantsNumers();
  // confirmUserWantsSpecialCharacter();

  if (useLowerCase || useUpperCase || useNumbers || useSpecialCharacter) {
    var password = generatePassword();
    // passwordText.value = password;
    alert(password);
  } else{
    alert('You need to chose at least one character type for your password');
  }

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for number of characters
function getNumberOfCharacter() {

  var howLongIsPassword = window.prompt('How long do you want the password to be ? - Length should be between 8 and 128 characters', 8);
  if (howLongIsPassword < 8 || howLongIsPassword > 128) {
    alert('Password should be between 8 and 128 characters long');
    return false;
  } else {
    passwordLength = howLongIsPassword;
    return true;
  }
}

// Prompt for if user wants lower case letters
// function confirmIfUserWantsLowerCase() {
//   wantsLowerCase = window.confirm('Do you want lower case letters in your password');
// }
var getLowerCase = function () {
  var useLowerCase = window.prompt("Do you want lower case letters?");
return useLowerCase;

// Prompt for if user wants upper case letters
// function confirmIfUserWantsUpperCase() {
//   wantsUpperCase = window.confirm('Do you want upper case letters in your password');
// }

var getUpperCase = function () {
  var useUpperCase = window.prompt("Do you want upper case letters?");
  return useUpperCase;
}

// Prompt for if user wants numbers in password
// function confirmIfUserWantsNumers() {
//   wantNumbers = window.confirm('Do you want mumbers in your password');
// }
var getNumbers = function () {
  var useNumeric = window.prompt("Do you want numbers?");
  return useNumeric;
}

// Prompt for if user wants special characters
// function confirmUserWantsSpecialCharacter() {
//   wantSpecialCharacter = window.confirm('Do you want special characters in your password');
// }
var getSpecialCharacters = function () {
  var useSpecialCharacters = window.prompt("Do you want lower case letters?");
  return useSpecialCharacters;
}

function generatePassword() {
  var result = [];
  for (var i=0; i < passwordLength; i++){
      result.push(passwordLength[i]);
  }
//   var i = 0;
//   while (i < passwordLength) {

//     if (getLowerCase) {
//       result.push(lowerCaseIndex());
//       i++;
//     }

//     if (getUpperCase) {
//       result.push(upperCaseIndex());
//       i++;
//     }

//     if (getNumbers) {
//       result.push(numericIndex());
//       i++;
//     }

//     if (getSpecialCharacter) {
//       result.push(specialCharactersIndex());
//       i++;
//     }
    
//   }

//   return result.join('');
// }

function lowerCaseIndex() {
  randomIndex = Math.round(Math.random() * 27);
  return lowerCase[randomIndex];
}


function upperCaseIndex() {
  randomIndex = Math.round(Math.random() * 27);
  return upperCase[randomIndex];
}


function numericIndex() {
  randomIndex = Math.round(Math.random() * 9);
  return numericOptions[randomIndex];
}


function specialCharactersIndex() {
  var specialCharLen= specialCharacters.length - 1;
  randomIndex = Math.round(Math.random() * specialCharLen);
  return specialCharacters[randomIndex];
}

