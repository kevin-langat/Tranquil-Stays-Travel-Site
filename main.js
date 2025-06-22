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

function addToWishlist(saveHeart) {
  let selectedCurrentHouse = JSON.parse(localStorage.getItem('selectedHouse'));
  let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  if (wishlistedHouses === null) {
    if (selectedCurrentHouse === null) {
      alert('Nothing To Show Here');
    } else {
      wislistToStorage();
      alreadySavedHelper(save);
    }
  } else {
    if (selectedCurrentHouse === null) {
      alert('Nothing To Show Here, Go Back And Selected The House First');
    } else {
      let existingWishlistedHousesId = [];
      wishlistedHouses.forEach((item) => {
        existingWishlistedHousesId.push(item.id);
      });

      if (existingWishlistedHousesId.includes(selectedCurrentHouse.id)) {
        alreadySavedHelper(saveHeart);
      } else {
        wislistToStorage();
      }
    }
  }
}
function alreadySavedHelper(savedHeart) {
  savedHeart.src = 'saved.png';
}
window.addEventListener('DOMContentLoaded', () => {
  let selectedCurrentHouse = JSON.parse(localStorage.getItem('selectedHouse'));
  let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  if (selectedCurrentHouse === null) {
    alert('Nothing To Show Here, Go Back And Select The House First');
  } else {
    let existingWishlistedHousesId = [];
    wishlistedHouses.forEach((item) => {
      existingWishlistedHousesId.push(item.id);
    });

    if (existingWishlistedHousesId.includes(selectedCurrentHouse.id)) {
      alreadySavedHelper(save);
    } else {
    }
  }
});

function wislistToStorage() {
  let selectedCurrentHouse = JSON.parse(localStorage.getItem('selectedHouse'));
  let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  let newWishlist = [];
  if (wishlistedHouses === null) {
    newWishlist.push(selectedCurrentHouse);
    localStorage.setItem('wishlistedHouses', JSON.stringify(newWishlist));
  } else {
    let existingWishlistedHouses = JSON.parse(
      localStorage.getItem('wishlistedHouses')
    );
    existingWishlistedHouses.push(selectedCurrentHouse);
    localStorage.setItem(
      'wishlistedHouses',
      JSON.stringify(existingWishlistedHouses)
    );
  }
}

// Account page
function displaySavedHouses(eventTarget) {}
