/*
Add validation to a sign-up form to ensure a user 
cannot submit the form without filling the requirements
*/
// A Validate function form to validate the form
function validate() {
  // Obtain form inputs
  //The id attributes, using getElementById function to access the input elements.
  var email = document.getElementById('email');
  var login = document.getElementById('login'); 
  var password = document.getElementById('pass');
  var confirmPassword = document.getElementById('pass2');
  var newsletter = document.getElementById('newsletter');
  var terms = document.getElementById('terms').checked;

  // Inline feedback messages
  email.classList.remove('error');
  login.classList.remove('error');
  password.classList.remove('error');
  confirmPassword.classList.remove('error');
  document.getElementById('email-error').textContent = '';
  document.getElementById('login-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  document.getElementById('confirm-password-error').textContent = '';

  // Validate email format with structure (xyz@xyz.xyz) using the test method to check if email matches the regex partern
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add('error');
    document.getElementById('email-error').textContent = 'Please enter a valid email address';
    return false;
  }

  // Validate login name
  //login name should be non empty 
  //convert the login name to lowercase using toLowerCase method 
  if (login.value.length === 0 || login.value.length > 20) { //to sensure login name isn't more than 20 characters
    login.classList.add('error');
    document.getElementById('login-error').textContent = 'Please enter a non-empty login name of less than 20 characters';
    return false;
  } else {
    login.value = login.value.toLowerCase(); // Convert login name to lowercase
  }

  // Validate password length
  if (password.value.length < 6) { //to ensure that password length isn't less than 6 characters.
    password.classList.add('error');
    document.getElementById('password-error').textContent = 'Please use password with 6 or more characters';
    return false;
  }

  // Validate password format
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // to enforce at least 1 uppercase, 1 lowercase and 6 characters
  if (!passwordRegex.test(password.value)) { //test method to check if the password format is met
    password.classList.add('error');
    document.getElementById('password-error').textContent = 'Use a password with at least 1 uppercase letter and 1 lowercase letter';
    return false;
  }

  // Validate password confirmation
  if (password.value !== confirmPassword.value || password.value === '') {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
    return false;
  }

  // Display alert for newsletter selection
  if (newsletter.checked) {
    alert('Note: you are likely to receive spam by selecting to receive newsletters');
  }

  // Validate terms acceptance
  if (!terms.checked) {
    document.getElementById('terms-error').textContent = 'Accept terms and conditions to proceed';
    return false;
  }

  // Form submission successful
  return true;
}
