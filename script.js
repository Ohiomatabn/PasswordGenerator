const generatedPassword = document.querySelector('#generatedPassword');

function generatePassword(){
  const passwordLength = document.getElementById('length').value;
  const includeLowerCase = document.getElementById('lowercase').checked;
  const includeUpperCase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;




  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
   const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const numberChars = '0123456789';
   const symbolChars = '!@#$%^&*_-?+|';

   let allowedChars = '';
   let password = '';

   allowedChars += includeLowerCase ? lowerCaseChars : "";

   allowedChars += includeUpperCase ? upperCaseChars : "";

   allowedChars += includeNumbers ? numberChars : "";

   allowedChars += includeSymbols ? symbolChars : "";

   if(passwordLength <= 0){
    return  generatedPassword.innerHTML = 'Password length must be at least 1'
   } 
   else if(allowedChars.length === 0){
    return generatedPassword.innerHTML = 'At least 1 set of character needs to be selected'
   }

   for(let i = 0; i < passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);

    password += allowedChars[randomIndex];

   }


   return generatedPassword.innerHTML = `<b>Generated Password:</b> ${password}`;
}

document.querySelector('.js-submit').addEventListener('click', () =>{
  generatePassword();
})