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
    subscribeEmailInput.style.border = '2px solid red';
    subscribeBtn.innerHTML = 'Subscribed';
    subscribeBtn.style.background = 'green';
  } else {
    subscribeEmailInput.style.border = '2px solid green';
    alert('valid email');
  }
}
const listingLink = document.querySelector('.listingLink');
const listingLinkSm = document.querySelector('.listingLinkSm');
const navBtnContainer = document.querySelector('.nav-button-container');
const lgDiscoverBtn = document.querySelector('.lg-discover-btn');
const smDiscoverBtn = document.querySelector('.sm-discover-btn');

window.addEventListener('DOMContentLoaded', () => {
  if (
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname.endsWith('/')
  ) {
    let authStatus = JSON.parse(localStorage.getItem('UserStatus'));
    if (authStatus === null) {
      listingLink.setAttribute('href', 'loginForm.html');
      listingLinkSm.setAttribute('href', 'loginForm.html');
      lgDiscoverBtn.setAttribute('href', 'loginForm.html');
      smDiscoverBtn.setAttribute('href', 'loginForm.html');

      navBtnContainer.innerHTML =
        '<a href="loginForm.html"><button>Register</button></a>';
    } else if (authStatus === 'Yes') {
      listingLink.setAttribute('href', 'houselisting.html');
      listingLinkSm.setAttribute('href', 'houselisting.html');
      lgDiscoverBtn.setAttribute('href', 'houselisting.html');
      smDiscoverBtn.setAttribute('href', 'houselisting.html');
      navBtnContainer.innerHTML =
        '<a href="accountpage.html"><img src="user.png" alt=""></a>';
    }
  }
});
const spinnerForSearch = document.querySelector('.spinnerForSearch');
const checkInDate = document.querySelector('.find-place-checkIn-input');
const checkOutDate = document.querySelector('.find-place-checkOut-input');
const propertyLocation = document.querySelector('.find-place-location-input');
const guests = document.querySelector('.find-place-guests-input');

let allValidityStatus;
let checkInDateValid;
let checkInOutDateValid;
const today = new Date();
let checkInDateValueG;

checkInDate.addEventListener('change', () => {
  const checkInDateValue = new Date(checkInDate.value);
  checkInDateValueG = checkInDateValue;
  if (checkInDateValue >= today) {
    checkInDateValid = true;
    checkInDate.style.border = '0.1em solid green';
  } else {
    checkInDateValid = false;
    checkInDate.style.border = '0.1em solid red';
  }
});

checkOutDate.addEventListener('change', () => {
  const checkOutDateValue = new Date(checkOutDate.value);
  if (
    checkOutDateValue > today &&
    checkOutDateValue > checkInDateValueG &&
    checkInDateValid === true
  ) {
    checkInOutDateValid = true;
    checkOutDate.style.border = '0.1em solid green';
    checkInDate.style.border = '0.1em solid green';
  } else {
    checkInOutDateValid = false;
    checkInDate.style.border = '0.1em solid red';
    checkOutDate.style.border = '0.1em solid red';
  }
});
guests.addEventListener('change', () => {
  if (
    propertyLocation.value.length > 4 &&
    guests.value.length > 0 &&
    checkInOutDateValid === true
  ) {
    allValidityStatus = true;
    guests.style.border = '0.1em solid green';
    checkOutDate.style.border = '0.1em solid green';
    checkInDate.style.border = '0.1em solid green';
    checkInDate.style.border = '0.1em solid green';
    propertyLocation.style.border = '0.1em solid green';
  } else {
    allValidityStatus = false;
    guests.style.border = '0.1em solid red';
    checkOutDate.style.border = '0.1em solid red';
    checkInDate.style.border = '0.1em solid red';
    checkInDate.style.border = '0.1em solid red';
    propertyLocation.style.border = '0.1em solid red';
  }
});

function searchForListings(eventTarget) {
  let randomNumber = Math.ceil(Math.random() * 6);
  let UserLogInStatus = JSON.parse(localStorage.getItem('UserStatus'));

  if (allValidityStatus === true) {
    if (UserLogInStatus === 'Yes') {
      localStorage.setItem(
        'HouseListingActiveTab',
        JSON.stringify(randomNumber)
      );
      setTimeout(() => {
        window.open('houselisting.html');
      }, 4500);
    } else {
      setTimeout(() => {
        window.open('houselisting.html');
      }, 4500);
    }
    spinnerForSearch.style.display = 'block';
    eventTarget.style.paddingLeft = '25%';
  } else {
    guests.style.border = '0.1em solid red';
    checkOutDate.style.border = '0.1em solid red';
    checkInDate.style.border = '0.1em solid red';
    checkInDate.style.border = '0.1em solid red';
    propertyLocation.style.border = '0.1em solid red';
  }
}
