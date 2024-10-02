// Register Form Handling
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;
  const confirmPasswordInput = document.getElementById('confirm-password').value;
  let nameError= document.getElementById('name-error');
  let emailerror= document.getElementById('email-error');

  let passwordError= document.getElementById('password-error');
  let confirmError= document.getElementById('confirm-password-error');


  var namePattern = /^[A-Za-z]+$/;

//validate name
  if(!nameInput.match(namePattern)){
    nameError.textContent= "name should only contain letters";
  } else{
    nameError.textContent='';
  }
// validate email

/*
if(emailInput.length===0){
  emailerror.textContent= 'Email is required';
}else if(!isValidEmail((emailInput.value))){
  emailerror.textContent = 'Please enter a valid email.';

}
 else{
  emailerror.textContent = '';
}

*/
  //validate password

  if(passwordInput.length<8){
    passwordError.textContent= 'password must be at least 8 characters';
  } else{
    passwordError.textContent= '';
  }

// validate confirm password
if(confirmPasswordInput!== passwordInput){
  confirmError.textContent= 'password do not match';
} else{
  passwordError.textContent= '';
}


// if all validation pass, the form is valid

if(nameInput.match(namePattern)&&passwordInput.length>=8 &&confirmPasswordInput===passwordInput){
  alert('Registeration successful!');
}

/*
  

  // Validate Name
  if (!name.match(namepattern) === '') {
    document.getElementById('name-error').textContent = 'Name should only include';
    
  } else {
    document.getElementById('name-error').textContent = '';
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    document.getElementById('email-error').textContent = 'Please enter your email.';
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email.';
    isValid = false;
  } else {
    document.getElementById('email-error').textContent = '';
  }

  // Validate Password
  if (passwordInput.length) {
    document.getElementById('password-error').textContent = 'Please enter a password.';
     
  } else {
    document.getElementById('password-error').textContent = '';
  }

  // Validate Confirm Password
  if (confirmPasswordInput.value.trim() =
   '') {
    document.getElementById('confirm-password-error').textContent = 'Please confirm your password.';
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
    isValid = false;
  } else {
    document.getElementById('confirm-password-error').textContent = '';
  }

  if (isValid) {
    // Perform registration logic here
    console.log('Registration Data:', {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmPasswordInput.value,
    });
  }
});

*/

/*
function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
*/

});