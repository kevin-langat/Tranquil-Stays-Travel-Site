const imghero = document.querySelector('.main-image');
const namesec = document.querySelector('.nameabout');
const saveText = document.querySelector('.saveText');
const save = document.querySelector('.save');
const headingName = document.querySelector('.heading-name');

const myProfileCon = document.querySelector('.my-profile-container');
const myTripsCon = document.querySelector('.my-trips-container');
const mywishlistCon = document.querySelector('.my-wishlist-loader');
const hostCon = document.querySelector('.become-host-container');
const getHelpCon = document.querySelector('.get-help-container');
const settingsCon = document.querySelector('.my-settings-container');
const allEachCon = document.querySelector('.all-each-containers');
const eachSavedHouse = document.querySelector('.each-saved-house');

const leftBtns = document.querySelectorAll('.all-con');
window.addEventListener('DOMContentLoaded', displayProfile);
function displayProfile(eventTarget) {
  allEachCon.innerHTML = `<div class="my-profile-container">
          <h1>My Profile</h1>
          <div class="loader-container"><img src="ringspinone.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'block';
  myTripsCon.style.display = 'none';
  mywishlistCon.style.display = 'none';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="accountUser.svg" alt="">My Profile';
}
function displayTrips(eventTarget) {
  allEachCon.innerHTML = `<div class="my-trips-container">
          <h1>My Trips</h1>
          <div class="loader-container"><img src="ringspinone.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'block';
  mywishlistCon.style.display = 'none';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="trip.svg" alt="">My Trips';
}
function displayHost(eventTarget) {
  allEachCon.innerHTML = `  <div class="become-host-container">
          <h1>Become a Host</h1>
          <div class="loader-container"><img src="ringspinone.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  mywishlistCon.style.display = 'none';
  hostCon.style.display = 'block';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="home.svg" alt="">Host Now';
}
function displayHelp(eventTarget) {
  allEachCon.innerHTML = `<div class="get-help-container">
          <h1>Get Help</h1>
          <div class="loader-container"><img src="ringspinone.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  mywishlistCon.style.display = 'none';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'block';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="help.svg" alt="">Get Help';
}
function displaySettings(eventTarget) {
  allEachCon.innerHTML = `  <div class="my-settings-container">
          <h1>Settings</h1>
          <div class="loader-container"><img src="ringspinone.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  mywishlistCon.style.display = 'none';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'block';
  headingName.innerHTML = '<img src="settings.svg" alt="">Settings';
}
function displaySavedHouses(eventTarget) {
  allEachCon.style.display = 'grid';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  mywishlistCon.style.display = 'block';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'none';
  headingName.innerHTML =
    '<img src="saved.png" style="width: 20%;  height: 80%;" alt="">My Wishlist';
  let displayHouses = JSON.parse(localStorage.getItem('savedHouses'));
  allEachCon.innerHTML = `<div class="loader">
          <div class="loader-container"><img style="mix-blend-mode: multiply;" src="ringspinone.svg" alt=""></div>
        </div>`;
  setTimeout(() => {
    allEachCon.innerHTML = displayHouses
      .map(
        (item, index) => `<div class="each-saved-house">
        <div class="saved-img-Container">
          <img src=${item.mainImage} alt="">
        </div>
        <div class="savedHouseInfo">
          <p>${item.name}</p>
          <p>${item.price} /Night</p>
          <a href="house1.html"><button onclick="viewDetailsByIndex(${item.id})">Check More Details</button></a>
        </div>
      </div>`
      )
      .join(' ');
  }, 500);
}

function handleSaveToStorage() {
  const currentSelectedHouse = JSON.parse(
    localStorage.getItem('selectedHouse')
  );
  if (localStorage.getItem('savedHouses') === null) {
    let newSaved = [currentSelectedHouse];
    localStorage.setItem('savedHouses', JSON.stringify(newSaved));
  } else {
    let currentContents = JSON.parse(localStorage.getItem('savedHouses'));
    currentContents.push(currentSelectedHouse);
    localStorage.setItem('savedHouses', JSON.stringify(currentContents));
  }
}

function saveHelperFunc(preventDuplicate) {
  let savedHousesIds = [];
  preventDuplicate.forEach((savedItem) => {
    const eachItemId = savedItem.id;
    savedHousesIds.push(eachItemId);
  });
  let currentHouse = JSON.parse(localStorage.getItem('selectedHouse'));
  if (savedHousesIds.includes(currentHouse.id)) {
    save.src = 'saved.png';
  } else {
    handleSaveToStorage();
  }
}
function savedColor() {
  let preventDuplicate = JSON.parse(localStorage.getItem('savedHouses'));
  if (preventDuplicate === null) {
    handleSaveToStorage();
    save.src = 'saved.png';
    saveText.style.transform = 'scale(1)';
    saveText.textContent = 'Saved';
    setTimeout(() => {
      saveText.textContent = 'Saved';
      saveText.style.transform = 'scale(0.0005)';
    }, 1500);
  } else {
    saveHelperFunc(preventDuplicate);
  }
}
let preventDuplicate = JSON.parse(localStorage.getItem('savedHouses'));
window.addEventListener('DOMContentLoaded', saveHelperFunc(preventDuplicate));
const child = document.querySelector('.deleteCheck');
const savedCon = document.querySelector('.allSaved');
const savedConAll = document.querySelectorAll('.allSaved');
const heroimage = document.querySelector('.displayimage');
const parent = document.querySelector('.saveddetails');
const previ = document.querySelector('.nameandlocation');
const closeSave = document.querySelector('.close-saved');
const savedListingsCon = document.querySelector('.container');
const rightinfo = document.querySelector('.rightinfo');

// WINDOWS SCROLL FOR RIGHT COLUMN

window.onscroll = function () {
  handleScroll();
};
function handleScroll() {
  let getScrollFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  let heigth =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolledPercentage = (getScrollFromTop / heigth) * 100;

  if (scrolledPercentage >= 25 && scrolledPercentage < 30) {
    rightinfo.style.position = 'fixed';
    rightinfo.style.top = '1%';
    rightinfo.style.width = '34%';
  } else if (scrolledPercentage >= 51) {
    rightinfo.style.position = '';
    rightinfo.style.marginTop = '120vh';
    rightinfo.style.width = '90%';
  } else if (scrolledPercentage < 25) {
    rightinfo.style.position = 'relative';
    rightinfo.style.marginTop = '0%';
    rightinfo.style.width = '90%';
  } else if (scrolledPercentage >= 30 && scrolledPercentage < 51) {
    rightinfo.style.position = 'fixed';
    rightinfo.style.marginTop = '5%';
    rightinfo.style.width = '34%';
  }
}
