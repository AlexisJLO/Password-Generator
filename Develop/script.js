function generatePassword() {
   
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numericChars = '0123456789';
    var specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    var charSet = '';
    var password = '';
  
   
    var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
  
    
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters.");
    }
  
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

  
  }
  

  var generateBtn = document.querySelector("#generate");
  
 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", writePassword);
  