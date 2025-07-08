// Subscribe  logic

const subscribeEmailInput = document.querySelector('.email-input');
const subscribeBtn = document.querySelector('.subscribe-btn');

if (
  window.location.pathname.endsWith('index.html') ||
  window.location.pathname.endsWith('/')
) {
  subscribeBtn.addEventListener('click', () => {
    if (subscribeEmailInput.value.length === 0) {
      subscribeEmailInput.setAttribute('placeholder', '*email required');
      subscribeEmailInput.style.border = '1px solid red';
    } else {
      validateSubscribeEmail();
    }
  });
}

function validateSubscribeEmail() {
  const emailValue = subscribeEmailInput.value;
  if (!emailValue.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    subscribeEmailInput.setAttribute('placeholder', '*invalid email');
    subscribeEmailInput.style.border = '2px solid green';
    subscribeBtn.innerHTML = 'Subscribed';
    subscribeBtn.style.background = 'green';
  } else {
    subscribeEmailInput.style.border = '2px solid green';
    alert('valid email');
  }
}
const listingLink = document.querySelector('.listingLink');
const navBtnContainer = document.querySelector('.nav-button-container');
window.addEventListener('DOMContentLoaded', () => {
  if (
    window.location.pathname.endsWith('acountpage.html') ||
    window.location.pathname.endsWith('house1.html') ||
    window.location.pathname.endsWith('houselisting.html')
  ) {
    let authStatus = JSON.parse(localStorage.getItem('UserStatus'));
    if (authStatus === null || authStatus === 'No') {
      window.location.replace('loginForm.html');
      listingLink.setAttribute('href', 'loginForm.html');
      navBtnContainer.innerHTML =
        '<a href="loginForm.html"><button>Register</button></a>';
    } else if (authStatus === 'Yes') {
      listingLink.setAttribute('href', 'houselisting.html');
      navBtnContainer.innerHTML =
        '<a href="accountpage.html"><img src="user.png" alt=""></a>';
    }
  } else if (
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname.endsWith('/')
  ) {
    let authStatus = JSON.parse(localStorage.getItem('UserStatus'));
    if (authStatus === null || authStatus === 'No') {
      listingLink.setAttribute('href', 'loginForm.html');
      navBtnContainer.innerHTML =
        '<a href="loginForm.html"><button>Register</button></a>';
    } else if (authStatus === 'Yes') {
      listingLink.setAttribute('href', 'houselisting.html');
      navBtnContainer.innerHTML =
        '<a href="accountpage.html"><img src="user.png" alt=""></a>';
    }
  }
});
