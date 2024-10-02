// Login Form Handling
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;
  const emailerror = document.getElementById('email-error');
  const passworderror = document.getElementById('password-error');

  //validate email
 
  //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(emailInput.length===0){
    emailerror.textContent= 'Email is required';
  }else if(!isValidEmail((emailInput.value))){
    emailerror.textContent = 'Please enter a valid email.';

  }
   else{
    emailerror.textContent = '';
  }

  //validate password

  
  if(passwordInput.length<8){
    passworderror.textContent= 'password must be at least 8 characters';
  } else{
    emailerror.textContent = '';
  }


if(emailInput.length > 0 && passwordInput.length>=8){
  alert('Login successful!')
}





/*
  let isValid = true;

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
  if (passwordInput.value.trim() === '') {
    document.getElementById('password-error').textContent = 'Please enter a password.';
    isValid = false;
  } else if(passwordInput.length<8){
    document.getElementById('password-error').textContent= 'password must be at least 8 characters';
    isValid= false;
  }
  
  else {
    document.getElementById('password-error').textContent = '';
  }

  if (isValid) {
    alert('login successful!')
    console.log('Login Data:', {
      email: emailInput.value,
      password: passwordInput.value,
    });
  }
});
*/
function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



});