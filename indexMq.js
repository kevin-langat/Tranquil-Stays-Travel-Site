const searchBoxConSm = document.querySelector('.hero-left-column');
const userSvgA = document.querySelector('.userSvgA');
const menuInfromation = document.querySelector('.menu-infromation-sm');
const hamburgerMenuContainer = document.querySelector(
  '.hamburgerMenuContainer'
);
const searchBarContainerSm = document.querySelector('.hero-left-column');
const filterBox = document.querySelector('.filter-container-small');
const searchSvgImg = document.querySelector('.searchSvgImg');
const filterSvg = document.querySelector('.filterSvg');

function openSearchBoxSm(eventTarget) {
  if (eventTarget.classList.contains('active')) {
    searchBoxConSm.style.display = 'none';
    searchSvgImg.classList.remove('active');
  } else {
    searchBoxConSm.style.display = 'flex';
    searchSvgImg.classList.add('active');
    if (filterSvg.attributes.class.value.includes('active')) {
      filterBox.style.transform = 'scale(0.00005)';
      filterSvg.classList.remove('active');
    }
    if (menuInfromation.classList.contains('active')) {
      hamburgerMenuContainer.innerHTML = `<svg onclick="openMenuBar(event.target)" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>`;
      menuInfromation.style.top = '-100%';
      menuInfromation.classList.remove('active');
    }
  }
}
searchBarContainerSm.addEventListener('click', (event) => {
  if (event.target.attributes.class.value === 'hero-left-column') {
    searchBoxConSm.style.display = 'none';
    searchSvgImg.classList.remove('active');
  }
});
window.addEventListener('DOMContentLoaded', () => {
  if (
    (window.location.pathname.endsWith('index.html') ||
      window.location.pathname.endsWith('/')) &&
    window.innerWidth <= 480
  ) {
    let authStatus = JSON.parse(localStorage.getItem('UserStatus'));
    if (authStatus === 'Yes') {
      userSvgA.setAttribute('href', 'accountpage.html');
    } else if (authStatus === null || authStatus === 'No') {
      userSvgA.setAttribute('href', 'loginForm.html');
    }
  }
});

function openMenuBar() {
  hamburgerMenuContainer.innerHTML = `<svg onclick="closeMenuBar(event.target)" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`;
  menuInfromation.style.top = '7%';
  menuInfromation.classList.add('active');

  if (filterSvg.attributes.class.value.includes('active')) {
    filterBox.style.transform = 'scale(0.00005)';
    filterSvg.classList.remove('active');
  }
  if (searchSvgImg.classList.contains('active')) {
    searchBoxConSm.style.display = 'none';
    searchSvgImg.classList.remove('active');
  }
}
function closeMenuBar() {
  hamburgerMenuContainer.innerHTML = `<svg onclick="openMenuBar(event.target)" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>`;
  menuInfromation.style.top = '-100%';
  menuInfromation.classList.remove('active');
}
const heroImage = document.querySelector('.hero-image-sm');
if (window.location.pathname.endsWith('index.html')) {
  heroImage.addEventListener('click', () => {
    if (menuInfromation.attributes.class.value.includes('active')) {
      hamburgerMenuContainer.innerHTML = `<svg onclick="openMenuBar(event.target)" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>`;
      menuInfromation.style.top = '-100%';
      menuInfromation.classList.remove('active');
    }
  });
}
// SECOND WEB PAGE
const userListingSvgA = document.querySelector('.userListingSvgA');
window.addEventListener('DOMContentLoaded', () => {
  if (
    window.location.pathname.endsWith('houselisting.html') &&
    window.innerWidth <= 480
  ) {
    let authStatus = JSON.parse(localStorage.getItem('UserStatus'));
    if (authStatus === 'Yes') {
      userListingSvgA.setAttribute('href', 'accountpage.html');
    } else if (authStatus === null) {
      userListingSvgA.setAttribute('href', 'loginForm.html');
      window.location.replace('loginForm.html');
    }
  }
});

function openFilterBox() {
  if (filterSvg.classList.contains('active')) {
    filterBox.style.transform = 'scale(0.00005)';
    filterSvg.classList.remove('active');
  } else {
    filterBox.style.transform = 'scale(1)';
    filterSvg.classList.add('active');
    if (searchSvgImg.classList.contains('active')) {
      searchBoxConSm.style.display = 'none';
      searchSvgImg.classList.remove('active');
    }
    if (menuInfromation.classList.contains('active')) {
      hamburgerMenuContainer.innerHTML = `<svg onclick="openMenuBar(event.target)" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>`;
      menuInfromation.style.top = '-100%';
      menuInfromation.classList.remove('active');
    }
  }
}
if (window.location.pathname.endsWith('houselisting.html')) {
  filterBox.addEventListener('click', (event) => {
    if (event.target.attributes.class.value === 'filter-container-small') {
      filterBox.style.transform = 'scale(0.00005)';
      filterSvg.classList.remove('active');
    }
  });
}
window.addEventListener('DOMContentLoaded', () => {
  if (
    window.location.pathname.endsWith('houselisting.html') &&
    window.innerWidth > 480
  ) {
    let authStatus = JSON.parse(localStorage.getItem('UserStatus'));
    if (authStatus === null || authStatus === 'No') {
      window.location.replace('loginForm.html');
    }
    searchBoxConSm.style.display = 'none';
  }
});
// Find places Container in Small screens
const checkInDateSm = document.querySelector('.find-place-check-in-input-sm');
const checkOutDateSm = document.querySelector('.find-place-check-out-input-sm');
const propertyLocationSm = document.querySelector(
  '.find-place-location-input-sm'
);
const guestsInputSm = document.querySelector('.find-place-guests-input-sm');

let checkInDateValueGSm;
let todaysm = new Date();
let checkInDateValidSm;
let checkInOutDateValidSm;

checkInDateSm.addEventListener('change', () => {
  const checkInDateValueSm = new Date(checkInDateSm.value);
  checkInDateValueGSm = checkInDateValueSm;
  if (checkInDateValueSm >= todaysm) {
    checkInDateValidSm = true;
    checkInDateSm.style.border = '0.1em solid green';
  } else {
    checkInDateValidSm = false;
    checkInDateSm.style.border = '0.1em solid red';
  }
});

checkOutDateSm.addEventListener('change', () => {
  const checkOutDateValueSm = new Date(checkOutDateSm.value);
  if (
    checkOutDateValueSm > todaysm &&
    checkOutDateValueSm > checkInDateValueGSm &&
    checkInDateValidSm === true
  ) {
    checkInOutDateValidSm = true;
    checkOutDateSm.style.border = '0.1em solid green';
    checkInDateSm.style.border = '0.1em solid green';
  } else {
    checkInOutDateValidSm = false;
    checkInDateSm.style.border = '0.1em solid red';
    checkOutDateSm.style.border = '0.1em solid red';
  }
});
let allValidityStatusSm;
guestsInputSm.addEventListener('change', () => {
  if (
    propertyLocationSm.value.length > 4 &&
    guestsInputSm.value.length > 0 &&
    checkInOutDateValidSm === true
  ) {
    allValidityStatusSm = true;
    guestsInputSm.style.border = '0.1em solid green';
    checkOutDateSm.style.border = '0.1em solid green';
    checkInDateSm.style.border = '0.1em solid green';
    propertyLocationSm.style.border = '0.1em solid green';
  } else {
    allValidityStatusSm = false;
    guestsInputSm.style.border = '0.1em solid red';
    checkOutDateSm.style.border = '0.1em solid red';
    checkInDateSm.style.border = '0.1em solid red';
    propertyLocationSm.style.border = '0.1em solid red';
  }
});
const spinnerForSearchSm = document.querySelector('.spinnerForSearchSm');
function searchForListingsSm(eventTarget) {
  let randomNumber = Math.ceil(Math.random() * 6);
  let UserLogInStatus = JSON.parse(localStorage.getItem('UserStatus'));

  if (allValidityStatusSm === true) {
    if (UserLogInStatus === 'Yes') {
      setTimeout(() => {
        window.location.reload();
        window.location.replace('houselisting.html');
      }, 3000);
      localStorage.setItem(
        'HouseListingActiveTab',
        JSON.stringify(randomNumber)
      );
    } else {
      window.location.reload();
      window.open('loginForm.html');
    }
    spinnerForSearchSm.style.display = 'block';
    eventTarget.style.paddingLeft = '20%';
  } else {
    guestsInputSm.style.border = '0.1em solid red';
    checkOutDateSm.style.border = '0.1em solid red';
    checkInDateSm.style.border = '0.1em solid red';
    propertyLocationSm.style.border = '0.1em solid red';
  }
}
