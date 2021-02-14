// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
  //get input data from User
    var passwordLength = parseInt(prompt("Enter a Password Length Between 8 and 128: ","0"), 10);
    var includeUpper = prompt("Must choose at least one of the following: Include Upper Case?:", "");
    var includeLower = prompt("Include Lower?: ","")
    var includeNumerals = prompt("Include Numeral Values?: ", "")
    var includeSymbols = prompt("Include Symbol Values?: ")
    var password = '';

    //check for at least one selected value
    if(includeLower || includeNumerals || includeSymbols || includeUpper == "yes") {
      
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz'

      for(var i, i=0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * passwordLength))
      }
      console.log(passwordLength)
      console.log(password)
      var passwordText = document.querySelector("#password");

      //prints result to screen
      passwordText.value = password;

    } 
    else {
      alert("Error: Please select a value.");
      writePassword();
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

