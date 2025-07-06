const formHeader = document.querySelector('.form-header-title');
const signUpBtn = document.querySelector('.sign-up-btn');
const loginBtn = document.querySelector('.sign-in-btn');
const loginContainer = document.querySelector('.logInContainer');
const signUpContainer = document.querySelector('.signUpContainer');
const nameInputContainer = document.querySelector('.name-container');
const emailInputContainer = document.querySelector('.email-container');
const passwordInputContainer = document.querySelector('.password-container');
const confirmPasswordContainer = document.querySelector(
  '.passwordConfirm-container'
);
const inputForm = document.querySelector('.input-form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');
const passwordInputHeader = document.querySelector('.passwordInputHeader');

if (window.location.pathname.endsWith('loginForm.html')) {
  loginBtn.addEventListener('click', (event) => {
    if (loginContainer.classList.contains('active')) {
      if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
        emailInput.style.border = '0.1em solid red';
        passwordInput.style.border = '0.1em solid red';
      } else {
        if (
          emailInput.value.includes('@gmail.com') &&
          passwordInput.value.length >= 6
        ) {
          emailInput.style.border = '0.1em solid green';
          let currentUsers = JSON.parse(localStorage.getItem('Userlogins'));
          passwordInput.style.border = '0.1em solid green';
          emailInput.style.border = '0.1em solid green';
          let userFoundEmail;
          let userFoundPassword;
          let CurrentLoggedInUserDetails;
          if (currentUsers === null || currentUsers.length === 0) {
            alert('Something went wrong');
          } else {
            currentUsers.forEach((item) => {
              if (item.email === emailInput.value) {
                userFoundEmail = item.email;
                userFoundPassword = item.password;
                CurrentLoggedInUserDetails = item;
              }
            });
            if (userFoundEmail === emailInput.value) {
              if (userFoundPassword === passwordInput.value) {
                alert('Welcome Back. Click ok to continue');
                loginContainer.setAttribute('href', 'index.html');
                localStorage.setItem('UserStatus', JSON.stringify('Yes'));
                localStorage.setItem(
                  'CurrentLoggedInUser',
                  JSON.stringify(CurrentLoggedInUserDetails)
                );
              } else {
                alert('Password is wrong');
                passwordInput.style.border = '0.1em solid red';
              }
            } else {
              alert('User Not Found. Please Register');
            }
          }
        } else {
          if (!emailInput.value.endsWith('@gmail.com')) {
            emailInput.style.border = '0.1em solid red';
          }
          if (passwordInput.value.length < 6) {
            passwordInput.style.border = '0.1em solid red';
          }
        }
      }
    }
    signUpContainer.classList.remove('active');
    loginContainer.classList.add('active');
    formHeader.innerHTML = 'Sign In';
    nameInputContainer.style.transform = 'scaleY(0.0005)';
    confirmPasswordContainer.style.transform = 'scaleY(0.0005)';
    passwordInputHeader.textContent = 'Enter Password';
    setTimeout(() => {
      inputForm.style.height = '35%';
      emailInputContainer.style.height = '40%';
      passwordInputContainer.style.height = '40%';
      nameInputContainer.style.display = 'none';
      confirmPasswordContainer.style.display = 'none';
    }, 200);
  });

  signUpBtn.addEventListener('click', (event) => {
    if (signUpContainer.classList.contains('active')) {
      if (
        nameInput.value.length >= 4 &&
        emailInput.value.length >= 15 &&
        emailInput.value.endsWith('@gmail.com') &&
        passwordInput.value.length >= 6 &&
        confirmPasswordInput.value.length >= 6 &&
        passwordInput.value === confirmPasswordInput.value
      ) {
        const user = {
          username: nameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
        };
        const currentUsers = JSON.parse(localStorage.getItem('Userlogins'));
        if (currentUsers === null) {
          localStorage.setItem('Userlogins', JSON.stringify([user]));
        } else {
          let userFoundEmail;
          currentUsers.forEach((item) => {
            if (item.email === user.email) {
              userFoundEmail = item.email;
            }
          });
          if (userFoundEmail === user.email) {
            alert('User already exists. Please login');
          } else {
            currentUsers.push(user);
            localStorage.setItem('Userlogins', JSON.stringify(currentUsers));
            signUpContainer.setAttribute('href', 'index.html');
            localStorage.setItem('UserStatus', JSON.stringify('Yes'));
            localStorage.setItem('CurrentLoggedInUser', JSON.stringify(user));
            alert('Registration successfull. Click Ok to continue');
          }
        }
        nameInput.style.border = '0.1em solid green';
        emailInput.style.border = '0.1em solid green';
        passwordInput.style.border = '0.1em solid green';
        confirmPasswordInput.style.border = '0.1em solid green';
      } else {
        if (nameInput.value.length < 4) {
          nameInput.style.border = '0.1em solid red';
        } else if (nameInput.value.length >= 4) {
          nameInput.style.border = '0.1em solid green';
        }
        if (
          emailInput.value.length < 15 ||
          !emailInput.value.endsWith('@gmail.com')
        ) {
          emailInput.style.border = '0.1em solid red';
        } else if (
          emailInput.value.length >= 15 &&
          emailInput.value.endsWith('@gmail.com')
        ) {
          emailInput.style.border = '0.1em solid green';
        }
        if (passwordInput.value.length < 6) {
          passwordInput.style.border = '0.1em solid red';
          confirmPasswordInput.style.border = '0.1em solid red';
        } else {
          confirmPasswordInput.style.border = 'none';
        }
        if (confirmPasswordInput.value < 6) {
          confirmPasswordInput.style.border = '0.1em solid red';
          passwordInput.style.border = '0.1em solid red';
        } else if (confirmPasswordInput.value >= 6) {
          if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.border = '0.1em solid red';
            passwordInput.style.border = '0.1em solid red';
          } else {
            confirmPasswordInput.style.border = '0.1em solid green';
            passwordInput.style.border = '0.1em solid green';
          }
        }
      }
    }
    loginContainer.classList.remove('active');
    signUpContainer.classList.add('active');
    formHeader.innerHTML = 'Sign Up';
    nameInputContainer.style.transform = 'scaleY(1)';
    confirmPasswordContainer.style.transform = 'scaleY(1)';
    passwordInputHeader.textContent = 'Create Password';
    setTimeout(() => {
      inputForm.style.height = '70%';
      emailInputContainer.style.height = '20%';
      passwordInputContainer.style.height = '20%';
      nameInputContainer.style.display = 'flex';
      confirmPasswordContainer.style.display = 'flex';
    }, 200);
  });
}
