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
  
    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");

    if (lowercase) {
        charSet += lowercaseChars;
    }
    if (uppercase) {
        charSet += uppercaseChars;
    }
    if (numeric) {
        charSet += numericChars;
    }
    if (special) {
        charSet += specialChars;
    }
  

    for (let i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(randomIndex);
      }
    
      return password;

  }
  

  var generateBtn = document.querySelector("#generate");
  
 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", writePassword);
  