//CONTACT FORM VALIDATION
//Validates name, email, and message fields in real time and on submit.
//Shows inline error messages and a success message on valid submission.

document.addEventListener('DOMContentLoaded', () => {
  //Exit if no form exists on this page.
  const form = document.getElementById('contact-form');
  if (!form) return; //Exit if no form on this page.

  //Grab all form fields and the success message element.
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMsg = document.getElementById('form-success');

  //VALIDATION RULES

  //Checks that the name field is not empty.
  function validateName() {
    const value = nameInput.value.trim();
    if (value === '') {
      showError('name-error', 'Please enter your full name.');
      return false;
    }
    clearError('name-error');
    return true;
  }

  //Checks that the email field is not empty and matches a valid format.
  function validateEmail() {
    const value = emailInput.value.trim();
    //Standard email format regex.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
      showError('email-error', 'Please enter your email address.');
      return false;
    }
    if (!emailRegex.test(value)) {
      showError('email-error', 'Please enter a valid email address.');
      return false;
    }
    clearError('email-error');
    return true;
  }

  //Checks that the message field is not empty and is at least 20 characters.
  function validateMessage() {
    const value = messageInput.value.trim();
    if (value === '') {
      showError('message-error', 'Please enter a message.');
      return false;
    }
    if (value.length < 20) {
      showError('message-error', 'Your message must be at least 20 characters.');
      return false;
    }
    clearError('message-error');
    return true;
  }

  //HELPER FUNCTIONS

  //Displays an error message below the relevant input field.
  function showError(id, message) {
    const el = document.getElementById(id);
    el.textContent = message;
    el.classList.add('visible');
    //Highlight the input field.
    const input = el.previousElementSibling;
    input.classList.add('input-error');
  }

  //Clears the error message and removes the red border from the input.
  function clearError(id) {
    const el = document.getElementById(id);
    el.textContent = '';
    el.classList.remove('visible');
    //Remove highlight from input field.
    const input = el.previousElementSibling;
    input.classList.remove('input-error');
  }

  //Real-time validation on blur.

  //Validates each field when the user leaves it.
  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  messageInput.addEventListener('blur', validateMessage);

  //Clear error as user starts retyping.
  nameInput.addEventListener('input', () => clearError('name-error'));
  emailInput.addEventListener('input', () => clearError('email-error'));
  messageInput.addEventListener('input', () => clearError('message-error'));

  //FORM SUBMIT

  form.addEventListener('submit', e => {
    e.preventDefault();

    //Run all validations.
    const isValid = validateName() & validateEmail() & validateMessage();

    if (isValid) {
      //Show success message and reset form.
      successMsg.classList.add('visible');
      form.reset();

      //Hide success message after 5 seconds.
      setTimeout(() => {
        successMsg.classList.remove('visible');
      }, 5000);
    }
  });
});