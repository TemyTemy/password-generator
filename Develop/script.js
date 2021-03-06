
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
    // passwordText.value = password;
    alert(password);
  } else{
    alert('You need to choose at least one character type for your password');
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
function confirmIfUserWantsLowerCase() {
  wantsLowerCase = window.confirm('Do you want lower case letters in your password');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
