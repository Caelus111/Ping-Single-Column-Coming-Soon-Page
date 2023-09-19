const input = document.querySelector('input');
const submitBtn = document.querySelector('.submit');
const error = document.querySelector('.error-text');

submitBtn.addEventListener('click', () => {
  let email = input.value;
  let validMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email == '') {
    error.classList.remove('not-shown');
    input.classList.add('error');
    error.textContent = 'You Forgot to add your email!';
  } else if (email.match(validMailFormat)) {
   error.classList.add('not-shown');
    input.classList.remove('error');
  } else {
    error.classList.remove('not-shown');
    input.classList.add('error');
    error.textContent = 'Please provide a valid email address';
  }
});
