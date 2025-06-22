const checkAvailabilityBtn = document.querySelector('.checkavailabilitybtn');
const locationInput = document.querySelector('.location-input');
const guestInput = document.querySelector('.guests-input');
const checkInInput = document.querySelector('.check-in-input');
const checkOutInput = document.querySelector('.check-out-input');
const loadingState = document.querySelector('.loading-state');

checkAvailabilityBtn.addEventListener('click', () => {
  // console.log(locationInput.value);
  if (locationInput.value.length === 0) {
    locationInput.style.border = '1px solid red';
  } else {
    locationInput.style.border = '1px solid green';
  }

  if (guestInput.value > 10 || !guestInput.value.length <= 0) {
    guestInput.value = 10;
    guestInput.style.border = '1px solid green';
  } else {
    guestInput.style.border = '1px solid red';
  }
  if (checkInInput.value.length <= 0) {
    checkInInput.style.border = '1px solid red';
  } else {
    checkInInput.style.border = '1px solid green';
  }
  if (checkOutInput.value.length === 0) {
    checkOutInput.style.border = '1px solid red';
  } else {
    checkOutInput.style.border = '1px solid green';
  }
  if (
    locationInput.value.length > 0 &&
    guestInput.value.length > 0 &&
    checkOutInput.value.length > 0 &&
    checkInInput.value.length > 0 &&
    (locationInput.value == 'London' ||
      locationInput.value == 'Phuket' ||
      locationInput.value == 'Nairobi' ||
      locationInput.value == 'Shanghai' ||
      locationInput.value == 'Dubai' ||
      locationInput.value == 'Paris')
  ) {
    loadingState.classList.add('active');
  } else {
    locationInput.style.border = '1px solid red';
  }
});
function resetFindPlace() {
  loadingState.classList.remove('active');
}

// Subscribe  logic

const emailInput = document.querySelector('.email-input');
const subscribeBtn = document.querySelector('.subscribe-btn');

subscribeBtn.addEventListener('click', () => {
  if (emailInput.value.length === 0) {
    console.log(emailInput.classList);
    emailInput.setAttribute('placeholder', '*email required');
    emailInput.style.border = '1px solid red';
  } else {
    validateSubscribeEmail();
  }
});

function validateSubscribeEmail() {
  const emailValue = emailInput.value;
  if (!emailValue.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailInput.setAttribute('placeholder', '*invalid email');
    emailInput.style.border = '2px solid green';
    subscribeBtn.innerHTML = 'Subscribed';
    subscribeBtn.style.background = 'green';
  } else {
    emailInput.style.border = '2px solid green';
    alert('valid email');
  }
}
