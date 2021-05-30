// Initialize variables
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var allChars = "";
var typesArr = "";
var randomNumber = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function to generate password
var generatePassword = function () {
  var lengthChars = window.prompt("How many characters, between 8 and 128, would you like in your password?");
  // check to see if user has informed the password maker and they fit the limits
  if (lengthChars > 7 && lengthChars <= 128) {
    alert("Cool. I'm going to randomly generate a password for you with " + lengthChars + " characters. I just have a few questions first.");
  }
  else { (alert("Ack! Try again. Pick a number between 8 and 128."));
  generatePassword();
  }

  // Prompts to confirm characters
  var lowerChoice = window.confirm("Would you like any lowercase letters in your password?");
  if (lowerChoice) {
    alert("You chose to include lower case letters in your password.");
    allChars += lowerChars;
  }
  else {
    alert("You chose not to have any lower case letters in your password.");
  }

  var upperChoice = window.confirm("Would you like uppercase letters in your password?");
  if (upperChoice) {
    alert("You chose to include upper case letters in your password.");
    allChars = upperChars + allChars;
  }
  else {
    alert("You chose not to have any upper case letters in your password.");
  }

  var numberChoice = window.confirm("Would you like to use numbers in your password?");
  if (numberChoice) {
    alert("You chose to include numbers in your password. I mean, this could be good, or it could be bad.");
    allChars += numberChars;
  }
  else {
    alert("You chose not to have any numbers in your password. This is probably the right choice.");
  }

  var specialChoice = window.confirm("Would you like to use special characters (such as '!, ?, &, /, etc.' in your password?");
  if (specialChoice) {
    alert("You chose to include special characters in your password.");
    allChars += specialChars;
  }
  else {
    alert("You chose not to have any special characters in your password.");
  }

  if (allChars) {
    alert("Ok, let's spit out some stuff that looks like a password for you.");
  }
  else {
    alert("Hey, bonehead. Pick at least one of the choices (lowercase letters, uppercase letters, numbers, and/or special characters) to include in your password! Otherwise, I have nothing to work with. Help me out here. Try again.");
  }
  
  var temp = new Array();
    // randomized character to add to password
    for (let i = 0; i < lengthChars; i++) {
      randomNumber = Math.floor(Math.random() * allChars.length);
      numbArray = allChars[randomNumber];
      temp.push(numbArray);
    }

    // make code suitable for password
    password = temp.join( " " );
    return password; 
}
// add eventListener to generateBtn
generateBtn.addEventListener("click", writePassword);






