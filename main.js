const imghero = document.querySelector('.main-image');
const namesec = document.querySelector('.nameabout');
const saveText = document.querySelector('.saveText');
const save = document.querySelector('.save');
const headingName = document.querySelector('.heading-name');

const myProfileCon = document.querySelector('.my-profile-container');
const myTripsCon = document.querySelector('.my-trips-container');
const mywishlistCon = document.querySelector('.my-wishlist-container');
const hostCon = document.querySelector('.become-host-container');
const getHelpCon = document.querySelector('.get-help-container');
const settingsCon = document.querySelector('.my-settings-container');
const allEachCon = document.querySelector('.all-each-containers');
const eachSavedHouse = document.querySelector('.each-saved-house');

const leftBtns = document.querySelectorAll('.all-con');
window.addEventListener('DOMContentLoaded', displayProfile);
function displayProfile() {
  allEachCon.innerHTML = `<div class="my-profile-container">
          <h1>My Profile</h1>
          <div class="loader-container"><img src="spinner.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="accountUser.svg" alt="">My Profile';
}

function displayTrips() {
  allEachCon.innerHTML = `<div class="my-trips-container">
          <h1>My Trips</h1>
          <div class="loader-container"><img src="spinner.svg" alt=""></div>

        </div>`;

  setTimeout(() => {
    allEachCon.innerHTML = `<div class="my-trips-container">
              <div class="tripDetails">
                <img style="width: 40%; height: 100%; border-radius: 1em;" src="DetailImg/img10.jpeg" alt="">
                <div class="all-trip-details-info">
                    <div class="trip-house-name">
                        <h2 style="  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-style: italic;">BeachSide Bungallow With A Hammock Field</h2>
                    </div>
                    <div class="all-other-trip-details">
                        <div class="hostAndNameInformation">
                  <div class="hostInfo">
                   <img src="icon/sagar.png" alt="hostImage">
                   <div class="hostfulldetails">
                    <h3>Host Name:<h4>Annah Marquez</h4></h3>
                    <h3>Host Rating:<h4><img src="star.png" alt="star"><img src="star.png" alt="star"><img src="star.png" alt="star"> <img src="star.png" alt="star"></h4></h3>
                    </div>
                  </div>
                </div>
          <div class="trips-check-in-out-info">
            <div class="trips-check-in">
              <h3>Check In Date</h3>
              <h4>12/06/2025</h4>
            </div>
            <div class="trips-check-out">
              <h3>Check Out Date</h3>
              <h4>12/06/2025</h4>
            </div>
            <div class="days-of-stays">
              <h3>Days Of Stay</h3>
              <h4>5 Days</h4>
            </div>
            <div class="total-amount-to-pay">
              <h3>Total Amount</h3>
              <h4>$ 500</h4>
            </div>
            </div>
            
            </div>
                <div class="trip-info-button">
                <button  class="check-Listing-btn">Check Listing</button>
                  <button style="background-color: red;" class="check-more-details">Cancel Booking</button>
              </div>
          </div>  
        </div>`;
  }, 200);

  // <div class="nameInformation">
  //                 <h4>Beachside Bungallow</h4>
  //               </div>

  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'block';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="trip.svg" alt="">My Trips';
}
function displayHost(eventTarget) {
  allEachCon.innerHTML = `  <div class="become-host-container">
          <h1>Become a Host</h1>
          <div class="loader-container"><img src="spinner.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  // mywishlistCon.style.display = 'none';
  hostCon.style.display = 'block';
  getHelpCon.style.display = 'none';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="home.svg" alt="">Host Now';
}
function displayHelp(eventTarget) {
  allEachCon.innerHTML = `<div class="get-help-container">
          <h1>Get Help</h1>
          <div class="loader-container"><img src="spinner.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  // mywishlistCon.style.display = 'none';
  hostCon.style.display = 'none';
  getHelpCon.style.display = 'block';
  settingsCon.style.display = 'none';
  headingName.innerHTML = '<img src="help.svg" alt="">Get Help';
}
function displaySettings(eventTarget) {
  allEachCon.innerHTML = `  <div class="my-settings-container">
          <h1>Settings</h1>
          <div class="loader-container"><img src="spinner.svg" alt=""></div>

        </div>`;
  allEachCon.style.display = 'flex';
  myProfileCon.style.display = 'none';
  myTripsCon.style.display = 'none';
  // mywishlistCon.style.display = 'none';
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
const rigthColumn = document.querySelector('.rigth-column');

// WINDOWS SCROLL FOR RIGHT COLUMN
window.addEventListener('DOMContentLoaded', displayTrips);
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
  if (scrolledPercentage <= 29) {
    rightinfo.style.position = '';
    rigthColumn.style.paddingTop = '1%';
    rightinfo.style.width = '95%';
  } else if (scrolledPercentage >= 30 && scrolledPercentage < 63) {
    rightinfo.style.position = 'fixed';
    rightinfo.style.top = '7%';
    rightinfo.style.width = '34.5%';
  } else if (scrolledPercentage >= 63) {
    rightinfo.style.position = '';
    rigthColumn.style.paddingTop = '60%';
    rightinfo.style.width = '95%';
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
function displaySavedHouses(eventTarget) {
  headingName.innerHTML =
    '<img style="width:20%; heigth:50%"; src="saved.png" alt="">My Wishlist';
  let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  allEachCon.innerHTML = `<div class="my-profile-container">
          <div class="loader-container"><img src="spinner.svg" alt=""></div>
        </div>`;

  setTimeout(() => {
    allEachCon.innerHTML = '';
    mywishlistCon.innerHTML = wishlistedHouses
      .map(
        (item) => `<div class="each-saved-house">
        <div class="saved-img-Container">
          <img src=${item.mainImage} alt="">
        </div>
        <div class="savedHouseInfo">
          <p>${item.name}</p>
          <p>${item.price} /Night</p>
          <div class="viewDetailsBtn">
          <a href="house1.html"><button onclick="viewDetailsByIndex(${item.id})">Check More Details</button></a>
          <img src='saved.png' onclick='deleteWishlistItem(event.target,${item.id})' alt="">
          </div>
        </div>
      </div>`
      )
      .join(' ');
    allEachCon.appendChild(mywishlistCon);
  }, 500);
  setTimeout(() => {
    if (wishlistedHouses.length === 0) {
      allEachCon.innerHTML = `<div class="my-profile-container empty-Container">
        <div class="loader-container"><img src="empty.png" alt=""></div>
          <h2>Oops! Nothing Is In Your Wishlist</h2>
        </div>`;
    }
  }, 600);
}
function deleteWishlistItem(eventTarget, itemId) {
  const imediateParent = eventTarget.parentElement;
  const grandParent = imediateParent.parentElement;
  const greatGrandParent = grandParent.parentElement;
  greatGrandParent.style.transform = 'scale(0.05)';
  setTimeout(() => {
    greatGrandParent.remove();
  }, 201);
  const wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  wishlistedHouses.forEach((targetItem, index) => {
    if (targetItem.id === itemId) {
      console.log(wishlistedHouses.indexOf(targetItem), targetItem.id);
      wishlistedHouses.splice(wishlistedHouses.indexOf(targetItem), 1);
      localStorage.setItem(
        'wishlistedHouses',
        JSON.stringify(wishlistedHouses)
      );
    }
  });
  console.log(wishlistedHouses);
}
