
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Global Variables

var passwordLength = 0;
var wantsLowerCase;
var wantsUpperCase;
var wantNumbers;
var wantSpecialCharacter;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
