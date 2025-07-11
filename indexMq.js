const searchBoxConSm = document.querySelector('.hero-left-column');
const userSvgA = document.querySelector('.userSvgA');
const menuInfromation = document.querySelector('.menu-infromation-sm');
const hamburgerMenuContainer = document.querySelector(
  '.hamburgerMenuContainer'
);
const searchBarContainerSm = document.querySelector('.hero-left-column');
let searchSvgImg;
function openSearchBoxSm(eventTarget) {
  searchSvgImg = eventTarget;
  if (eventTarget.classList.contains('active')) {
    searchBoxConSm.style.display = 'none';
    eventTarget.classList.remove('active');
  } else {
    searchBoxConSm.style.display = 'flex';
    eventTarget.classList.add('active');
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

function openMenuBar(eventTarget) {
  hamburgerMenuContainer.innerHTML = `<svg onclick="closeMenuBar(event.target)" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`;
  menuInfromation.style.top = '7%';
  menuInfromation.classList.add('active');
}
function closeMenuBar(eventTarget) {
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
    }
  }
});
const filterBox = document.querySelector('.filter-container-small');
let filterSvg;
function openFilterBox(eventTarget) {
  filterSvg = eventTarget;
  if (eventTarget.attributes.class.value.includes('active')) {
    filterBox.style.transform = 'scale(0.00005)';
    eventTarget.classList.remove('active');
  } else {
    filterBox.style.transform = 'scale(1)';
    eventTarget.classList.add('active');
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
