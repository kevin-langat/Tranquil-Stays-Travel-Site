const imghero = document.querySelector('.main-image');
const namesec = document.querySelector('.nameabout');
const saveText = document.querySelector('.saveText');
const save = document.querySelector('.save');

const leftBtns = document.querySelectorAll('.all-con');
// window.addEventListener('DOMContentLoaded', () => {
//   if (window.location.pathname.endsWith('accountpage.html')) {
//     displaySavedHouses();
//   }
// });

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
window.onscroll = function () {
  if (window.location.pathname.endsWith('house1.html')) {
    handleScroll();
  }
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

function addToWishlist() {
  let selectedCurrentHouse = JSON.parse(localStorage.getItem('selectedHouse'));
  let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  if (wishlistedHouses === null) {
    if (selectedCurrentHouse === null) {
      alert('Nothing To Show Here');
    } else {
      wislistToStorage();
    }
  } else {
    if (selectedCurrentHouse === null) {
      alert('Nothing To Show Here, Go Back And Select The House');
    } else {
      let existingWishlistedHousesId = [];
      wishlistedHouses.forEach((item) => {
        existingWishlistedHousesId.push(item.id);
      });

      if (existingWishlistedHousesId.includes(selectedCurrentHouse.id)) {
        alert('Already In Your Wishlist');
      } else {
        wislistToStorage();
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('house1.html')) {
    let selectedCurrentHouse = JSON.parse(
      localStorage.getItem('selectedHouse')
    );
    let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
    if (selectedCurrentHouse === null) {
      alert('Nothing To Show Here, Go Back And Select The House');
    } else {
      let existingWishlistedHousesId = [];
      wishlistedHouses.forEach((item) => {
        existingWishlistedHousesId.push(item.id);
      });

      if (existingWishlistedHousesId.includes(selectedCurrentHouse.id)) {
        alreadySavedHelper(save);
      }
    }
  }
});

function alreadySavedHelper(savedHeart) {
  savedHeart.src = 'saved.png';
}

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
    if (existingWishlistedHouses.length < 10) {
      existingWishlistedHouses.push(selectedCurrentHouse);
      localStorage.setItem(
        'wishlistedHouses',
        JSON.stringify(existingWishlistedHouses)
      );
      save.src = 'saved.png';
    } else {
      alert(
        'You have exceeded the required number of wishlist. You can add upto 10 items only '
      );
    }
  }
}
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('accountpage.html')) {
    displayWishlistsNumber();
  }
});
const wishlistNumberContainer = document.querySelector('.wishlist-number');

function displayWishlistsNumber() {
  let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  wishlistNumberContainer.textContent = wishlistedHouses.length;
}

// Account page
const headingName = document.querySelector('.heading-name');
const myProfileCon = document.querySelector('.myprofilecontainer');
const myTripsCon = document.querySelector('.mytripscontainer');
const mywishlistCon = document.querySelector('.mywishlistcontainer');
const hostCon = document.querySelector('.becomehostcontainer');
const getHelpCon = document.querySelector('.gethelpcontainer');
const settingsCon = document.querySelector('.settingscontainer');
const allEachCon = document.querySelector('.all-each-containers');

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('accountpage.html')) {
    displayTrips();
  }
});

function displaySavedHouses() {
  headingName.innerHTML =
    '<img style="width:20%; heigth:50%"; src="saved.png" alt="">My Wishlist';
  let wishlistedHouses = JSON.parse(localStorage.getItem('wishlistedHouses'));
  mywishlistCon.style.display = 'flex';
  mywishlistCon.style.flexDirection = 'column';
  mywishlistCon.style.alignItems = 'center';
  mywishlistCon.style.justifyContent = 'center';
  mywishlistCon.innerHTML = `<div class="loading-state">
          <img src="spinner.svg" alt="">
        </div>`;
  setTimeout(() => {
    mywishlistCon.style.display = 'grid';
    mywishlistCon.style.gridTemplateColumns = 'repeat(3,1fr)';
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
  }, 1500);
  if (wishlistedHouses.length === 0) {
    mywishlistCon.style.display = 'flex';
    mywishlistCon.style.flexDirection = 'column';
    mywishlistCon.style.alignItems = 'center';
    mywishlistCon.style.justifyContent = 'center';
    mywishlistCon.innerHTML = `<div class="loading-state">
          <img src="spinner.svg" alt="">
        </div>`;
    setTimeout(() => {
      mywishlistCon.innerHTML = `<div class="my-profile-container empty-Container">
        <div class="loader-container"><img src="empty.png" alt=""></div>
          <h2>Oops! Nothing Is In Your Wishlist</h2>
        </div>`;
    }, 1500);
  }

  allEachCon.innerHTML = '';
  allEachCon.appendChild(mywishlistCon);
}
function deleteWishlistItem(eventTarget, itemId) {
  const imediateParent = eventTarget.parentElement;
  const grandParent = imediateParent.parentElement;
  const greatGrandParent = grandParent.parentElement;
  eventTarget.src = 'save.png';
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
  displayWishlistsNumber();
}

function displayTrips() {
  let currentTrips = JSON.parse(localStorage.getItem('BookedHouses'));
  console.log(currentTrips[0]);

  headingName.innerHTML =
    '<img style="width:20%; heigth:50%"; src="trip.svg" alt="">My Trips';
  myTripsCon.innerHTML = currentTrips
    .map(
      (displayTripItem) => `<div class="each-trip-con">
            <div class="main-image-container">
              <img src="${displayTripItem.bookingImage}" alt="">
            </div>
            <div class="each-left-column">
              <div class="upper-container">
                <h3>${displayTripItem.bookingName}</h3>
              </div>
              <div class="lower-container">
                <div class="trip-host-card">
                  <img src="${
                    displayTripItem.bookingHostIamge
                  }" alt="hostImage"></img>
                  <div class="trip-host-details">
                  <h3>Your Host:</h3>
                  <h3>${displayTripItem.bookingHostName}</h3>
                  <p style="font-weight: bold;">${
                    displayTripItem.bookingHostYOE
                  } YOE</p>
                  </div>
                </div>
                <div class="trip-check-in-out-details">
                  <div class="trip-check-in-container">
                    <h4>Check In Date:</h4>
                    <h4>${new Date(
                      displayTripItem.checkInDate
                    ).getDate()}/${new Date(
        displayTripItem.checkInDate
      ).getMonth()}/${new Date(displayTripItem.checkInDate).getFullYear()}</h4>
                  </div>
                  <div class="trip-check-out-container">
                    <h4>Check Out Date:</h4>
                    <h4>${new Date(
                      displayTripItem.checkOutDate
                    ).getDate()}/${new Date(
        displayTripItem.checkOutDate
      ).getMonth()}/${new Date(displayTripItem.checkOutDate).getFullYear()}</h4>
                  </div>
                  <div class="trip-days-stays-container">
                    <h4>Days Of Stay:</h4>
                    <h4>${displayTripItem.daysOfStays} Days</h4>
                  </div>
                  <div class="trip-total-amount-container">
                    <h4>Total Amount:</h4>
                    <h4>$ ${displayTripItem.totalAmount}</h4>
                  </div>
                </div>
              </div>
              <div class="lower-buttons-container">
                <button>Check Listing</button>
                <button style="background-color:red;">Cancel Booking</button>
              </div>
            </div>

          </div>`
    )
    .join(' ');
  allEachCon.innerHTML = '';
  allEachCon.appendChild(myTripsCon);
}
function displayProfile() {
  headingName.innerHTML =
    '<img style="width:20%; heigth:50%"; src="accountUser.svg" alt="">My Profile';
  allEachCon.innerHTML = '';
  allEachCon.appendChild(myProfileCon);
}
function displayHost() {
  headingName.innerHTML =
    '<img style="width:20%; heigth:50%"; src="home.svg" alt="">Become Host';
  allEachCon.innerHTML = '';
  allEachCon.appendChild(hostCon);
}
function displayHelp() {
  headingName.innerHTML =
    '<img style="width:20%; heigth:50%"; src="help.svg" alt="">Get Help';
  allEachCon.innerHTML = '';
  allEachCon.appendChild(getHelpCon);
}
function displaySettings() {
  headingName.innerHTML =
    '<img style="width:20%; heigth:50%"; src="settings.svg" alt="">Settings';
  allEachCon.innerHTML = '';
  allEachCon.appendChild(settingsCon);
}
