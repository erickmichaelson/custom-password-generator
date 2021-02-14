// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
  //get input data from User and confirm selections
    var passwordLength = parseInt(prompt("Enter a Password Length Between 8 and 128: ","0"), 10);
    var includeUpper = confirm("Must choose at least one of the following: Include Upper Case?:", "");
    var includeLower = confirm("Include Lower?: ","")
    var includeNumerals = confirm("Include Numeral Values?: ", "")
    var includeSymbols = confirm("Include Symbol Values?: ")
    var password = '';
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numerals = "0123456789";
    let symbols = "!@#$%^&*(){}[]:;?/<>,._-";
    let characters = [];


    //check for at least one selected value
    if(includeLower != true && includeNumerals != true && includeSymbols != true && includeUpper != true) {
      
      return(alert("Error: Please select at least one character type: "))
        
      writePassword();
    } 
    // if at least one option is checked then function can continue to run
    else {

      //these if statements check for which selected character types will be used. 
      if(includeLower) {
        characters += lowerCase;
      }
      if(includeNumerals) {
        characters += numerals;
        console.log(characters);
      }
      if(includeSymbols) {
        characters += symbols;
      }
      if(includeUpper) {
        characters += upperCase;
      }

      //this for loop iterates through the provided length and generates a random string up until that given length.
      for(var i, i=0; i < passwordLength; i++){
        password += characters[Math.floor(Math.random() * (passwordLength))];
      }
      console.log(passwordLength);
      console.log(password.length);
      console.log(password);

      var passwordText = document.querySelector("#password");

      //prints result to screen
      passwordText.value = password;
    }
  
}

// Add event listener to generate button, this button links to the html and begins the writePasswrd function
generateBtn.addEventListener("click", writePassword);

