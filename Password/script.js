function generatePassword(){
  let showPassword = document.getElementById('showPassword');
  
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = '0123456789';
  let specialChar = '!@#$%^&*_.?';
  let password = '';
  let passwordLength = document.getElementById('passwordLength').value;
  passwordLength = Number(passwordLength);
  let allCharacters = lowerCase + upperCase + number + specialChar;

  for(let i = 0; i < passwordLength; i++){
    let randomNumber = Math.floor(Math.random() * allCharacters.length);

    password += allCharacters[randomNumber];
  }
  showPassword.textContent += password;
  
}