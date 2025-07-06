const imghero = document.querySelector('.main-image');
const namesec = document.querySelector('.nameabout');
const saveText = document.querySelector('.saveText');
const save = document.querySelector('.save');

const leftBtns = document.querySelectorAll('.all-con');

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
    let windowRequiredAction = JSON.parse(
      localStorage.getItem('AccountInfoLoad')
    );
    if (windowRequiredAction === 1) {
      displayProfile();
    } else if (windowRequiredAction === 2) {
      displayTrips();
    } else if (windowRequiredAction === 3) {
      displaySavedHouses();
    } else if (windowRequiredAction === 4) {
      displayHost();
    } else if (windowRequiredAction === 5) {
      displayHelp();
    } else if (windowRequiredAction === 6) {
      displaySettings();
    } else if (windowRequiredAction === null) {
      displayProfile();
    } else {
      displayProfile();
    }
  }
});
const myProfileHeaderCon = document.querySelector('.displayProfileContainer');
const myTripsHeaderCon = document.querySelector('.displayTripsContainer');
const myWishlistHeaderCon = document.querySelector(
  '.displaySavedHousesContainer'
);
const hostHeaderCon = document.querySelector('.displayHostContainer');
const helpHeaderCon = document.querySelector('.displayHelpContainer');
const settingsHeaderCon = document.querySelector('.displaySettingsContainer');

function displaySavedHouses(eventTarget) {
  localStorage.setItem('AccountInfoLoad', JSON.stringify(3));
  headingName.innerHTML = '<img src="saved.png" alt="">My Wishlist';
  myProfileHeaderCon.style.border = 'none';
  myTripsHeaderCon.style.border = 'none';
  myWishlistHeaderCon.style.border = '0.1em solid rgb(55, 55, 126)';
  hostHeaderCon.style.border = 'none';
  helpHeaderCon.style.border = 'none';
  settingsHeaderCon.style.border = 'none';
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
  }, 1000);
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
const tripsNumber = document.querySelector('.trips-number');

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('accountpage.html')) {
    let currentTrips = JSON.parse(localStorage.getItem('BookedHouses'));
    tripsNumber.textContent = currentTrips.length;
  }
});
function displayTrips() {
  allEachCon.innerHTML = '';
  localStorage.setItem('AccountInfoLoad', JSON.stringify(2));
  let currentTrips = JSON.parse(localStorage.getItem('BookedHouses'));
  tripsNumber.textContent = currentTrips.length;
  myProfileHeaderCon.style.border = 'none';
  myTripsHeaderCon.style.border = '0.1em solid rgb(55, 55, 126)';
  myWishlistHeaderCon.style.border = 'none';
  hostHeaderCon.style.border = 'none';
  helpHeaderCon.style.border = 'none';
  settingsHeaderCon.style.border = 'none';
  headingName.innerHTML = '<img src="trip.svg" alt="">My Trips';
  myTripsCon.innerHTML =
    '<div class=loader-image-trips><img src="spinner.svg"></div>';
  allEachCon.appendChild(myTripsCon);
  setTimeout(() => {
    allEachCon.innerHTML = '';
    if (currentTrips.length === 0) {
      myTripsCon.innerHTML = `<div class="my-profile-container empty-Container">
        <div class="loader-container"><img src="empty.png" alt=""></div>
          <h2>Oops! You Don't Have Any Trips Now</h2>
        </div>`;
    } else {
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
          ).getMonth()}/${new Date(
            displayTripItem.checkInDate
          ).getFullYear()}</h4>
                  </div>
                  <div class="trip-check-out-container">
                    <h4>Check Out Date:</h4>
                    <h4>${new Date(
                      displayTripItem.checkOutDate
                    ).getDate()}/${new Date(
            displayTripItem.checkOutDate
          ).getMonth()}/${new Date(
            displayTripItem.checkOutDate
          ).getFullYear()}</h4>
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
               <a href="house1.html"><button  onclick="viewDetailsByIndex(${
                 displayTripItem.bookingId
               })">Check Listing</button></a>
                <button style="background-color:red;" onclick="cancelValidBooking(event.target,${
                  displayTripItem.bookingId
                })">Cancel Booking</button>
              </div>
            </div>

          </div>`
        )
        .join(' ');
    }

    allEachCon.appendChild(myTripsCon);
  }, 2000);
}
const allPersonalCon = document.querySelector('.all-personal-info-container');
const profilenameInput = document.querySelector('.firstNameInput');
const profileNickNameInput = document.querySelector('.nickNameInput');
const profileEmailInput = document.querySelector('.profileEmailInput');
const profilePhoneNumberInput = document.querySelector('.phoneNumber');
const userNameDisplay = document.querySelector('.userNameDisplay');

function displayProfile() {
  localStorage.setItem('AccountInfoLoad', JSON.stringify(1));
  headingName.innerHTML = '<img src="accountUser.svg" alt="">My Profile';
  myProfileHeaderCon.style.border = '0.1em solid rgb(55, 55, 126)';
  myTripsHeaderCon.style.border = 'none';
  myWishlistHeaderCon.style.border = 'none';
  hostHeaderCon.style.border = 'none';
  helpHeaderCon.style.border = 'none';
  settingsHeaderCon.style.border = 'none';
  allEachCon.innerHTML = '';
  myProfileCon.innerHTML =
    '<div class=loader-image-trips><img src="spinner.svg"></div>';
  allEachCon.appendChild(myProfileCon);
  setTimeout(() => {
    allEachCon.innerHTML = '';
    myProfileCon.innerHTML = '';
    myProfileCon.appendChild(allPersonalCon);
    allEachCon.appendChild(myProfileCon);
  }, 500);

  let currentUserInfo = JSON.parse(localStorage.getItem('CurrentLoggedInUser'));
  userNameDisplay.textContent = currentUserInfo.username;
  profilenameInput.setAttribute('value', `${currentUserInfo.username}`);
  profileEmailInput.setAttribute('value', `${currentUserInfo.email}`);
  if (
    currentUserInfo.nickname === undefined ||
    currentUserInfo.nickname === null
  ) {
    profileNickNameInput.setAttribute('value', 'Not provided');
  } else if (currentUserInfo.nickname) {
    profileNickNameInput.setAttribute('value', `${currentUserInfo.nickname}`);
  }
  if (
    currentUserInfo.phoneNumber === undefined ||
    currentUserInfo.phoneNumber === null
  ) {
    profilePhoneNumberInput.setAttribute('value', 'Not provided');
  } else if (currentUserInfo.phoneNumber) {
    profilePhoneNumberInput.setAttribute(
      'value',
      `${currentUserInfo.phoneNumber}`
    );
  }
}
function displayHost() {
  localStorage.setItem('AccountInfoLoad', JSON.stringify(4));
  headingName.innerHTML = '<img src="home.svg" alt="">Become Host';
  myProfileHeaderCon.style.border = 'none';
  myTripsHeaderCon.style.border = 'none';
  myWishlistHeaderCon.style.border = 'none';
  hostHeaderCon.style.border = '0.1em solid rgb(55, 55, 126)';
  helpHeaderCon.style.border = 'none';
  settingsHeaderCon.style.border = 'none';
  allEachCon.innerHTML = '';
  allEachCon.appendChild(hostCon);
}
function displayHelp() {
  localStorage.setItem('AccountInfoLoad', JSON.stringify(5));
  headingName.innerHTML = '<img src="help.svg" alt="">Get Help';
  myProfileHeaderCon.style.border = 'none';
  myTripsHeaderCon.style.border = 'none';
  myWishlistHeaderCon.style.border = 'none';
  hostHeaderCon.style.border = 'none';
  helpHeaderCon.style.border = '0.1em solid rgb(55, 55, 126)';
  settingsHeaderCon.style.border = 'none';
  allEachCon.innerHTML = '';
  allEachCon.appendChild(getHelpCon);
}
function displaySettings() {
  localStorage.setItem('AccountInfoLoad', JSON.stringify(6));
  headingName.innerHTML = '<img src="settings.svg" alt="">Settings';
  myProfileHeaderCon.style.border = 'none';
  myTripsHeaderCon.style.border = 'none';
  myWishlistHeaderCon.style.border = 'none';
  hostHeaderCon.style.border = 'none';
  helpHeaderCon.style.border = 'none';
  settingsHeaderCon.style.border = '0.1em solid rgb(55, 55, 126)';
  allEachCon.innerHTML = '';
  allEachCon.appendChild(settingsCon);
}

function cancelValidBooking(eventTarget, eachHouseId) {
  let buttonParent = eventTarget.parentElement;
  let buttonGrandParent = buttonParent.parentElement;
  let buttonGreatGrandParent = buttonGrandParent.parentElement;
  buttonGreatGrandParent.style.transform = 'scale(0.01)';

  setTimeout(() => {
    buttonGreatGrandParent.remove();
    let allBookedHouses = JSON.parse(localStorage.getItem('BookedHouses'));

    allBookedHouses.forEach((bookingItem) => {
      if (bookingItem.bookingId === eachHouseId) {
        let targetHouseIndex = allBookedHouses.indexOf(bookingItem);
        allBookedHouses.splice(targetHouseIndex, 1);
        localStorage.setItem('BookedHouses', JSON.stringify(allBookedHouses));
      }
    });
    tripsNumber.textContent = allBookedHouses.length;
  }, 401);
}
// Edit profile info
function clearCurrentValue(eventTarget) {
  eventTarget.setAttribute('value', '');
}

function editFirstName(eventTarget) {
  let currentUserInfo = JSON.parse(localStorage.getItem('CurrentLoggedInUser'));
  let allCurrentUsers = JSON.parse(localStorage.getItem('Userlogins'));
  if (profilenameInput.value.length >= 4) {
    if (currentUserInfo !== null && !allCurrentUsers !== null) {
      currentUserInfo.username = profilenameInput.value;
      localStorage.setItem(
        'CurrentLoggedInUser',
        JSON.stringify(currentUserInfo)
      );
      eventTarget.style.backgroundColor = 'green';
      eventTarget.textContent = 'Editted';
      setTimeout(() => {
        eventTarget.style.backgroundColor = '#302b5e';
        eventTarget.textContent = 'Edit';
      }, 1000);

      let userInStorage;
      let indexOfUserInStorage;
      allCurrentUsers.forEach((item) => {
        if (currentUserInfo.email === item.email) {
          userInStorage = item;
          indexOfUserInStorage = allCurrentUsers.indexOf(item);
        }
      });
      userInStorage.username = profilenameInput.value;
      allCurrentUsers[indexOfUserInStorage] = userInStorage;
      localStorage.setItem('Userlogins', JSON.stringify(allCurrentUsers));
      profilenameInput.style.border = '0.1em solid green';
    } else {
      alert('Something Went Wrong');
    }
  } else {
    profilenameInput.style.border = '0.1em solid red';
  }
}

function editNickName(eventTarget) {
  let currentUserInfo = JSON.parse(localStorage.getItem('CurrentLoggedInUser'));
  let allCurrentUsers = JSON.parse(localStorage.getItem('Userlogins'));
  if (profileNickNameInput.value.length >= 4) {
    if (currentUserInfo !== null && !allCurrentUsers !== null) {
      currentUserInfo.nickname = profileNickNameInput.value;
      localStorage.setItem(
        'CurrentLoggedInUser',
        JSON.stringify(currentUserInfo)
      );
      eventTarget.style.backgroundColor = 'green';
      eventTarget.textContent = 'Editted';
      setTimeout(() => {
        eventTarget.style.backgroundColor = '#302b5e';
        eventTarget.textContent = 'Edit';
      }, 1000);

      let userInStorage;
      let indexOfUserInStorage;
      allCurrentUsers.forEach((item) => {
        if (currentUserInfo.email === item.email) {
          userInStorage = item;
          indexOfUserInStorage = allCurrentUsers.indexOf(item);
        }
      });
      userInStorage.nickname = profileNickNameInput.value;
      allCurrentUsers[indexOfUserInStorage] = userInStorage;
      localStorage.setItem('Userlogins', JSON.stringify(allCurrentUsers));
      profileNickNameInput.style.border = '0.1em solid green';
    } else {
      alert('Something Went Wrong');
    }
  } else {
    profileNickNameInput.style.border = '0.1em solid red';
  }
}
function editEmailInfo(eventTarget) {
  // window.location.reload();
  let currentUserInfo = JSON.parse(localStorage.getItem('CurrentLoggedInUser'));
  let allCurrentUsers = JSON.parse(localStorage.getItem('Userlogins'));
  if (
    profileEmailInput.value.length >= 15 &&
    profileEmailInput.value.endsWith('@gmail.com')
  ) {
    if (currentUserInfo !== null && !allCurrentUsers !== null) {
      let userInStorage;
      let indexOfUserInStorage;
      allCurrentUsers.forEach((item) => {
        if (currentUserInfo.email === item.email) {
          userInStorage = item;
          indexOfUserInStorage = allCurrentUsers.indexOf(item);
        }
      });
      console.log(userInStorage);
      userInStorage.email = profileEmailInput.value;
      allCurrentUsers[indexOfUserInStorage] = userInStorage;
      localStorage.setItem('Userlogins', JSON.stringify(allCurrentUsers));
      profileNickNameInput.style.border = '0.1em solid green';

      console.log(currentUserInfo.email);
      currentUserInfo.email = profileEmailInput.value;
      localStorage.setItem(
        'CurrentLoggedInUser',
        JSON.stringify(currentUserInfo)
      );
      console.log(currentUserInfo.email);
      eventTarget.style.backgroundColor = 'green';
      eventTarget.textContent = 'Editted';
      setTimeout(() => {
        eventTarget.style.backgroundColor = '#302b5e';
        eventTarget.textContent = 'Edit';
      }, 1000);
      profileEmailInput.style.border = '0.1em solid green';
    } else {
      alert('Something Went Wrong');
    }
  } else {
    profileEmailInput.style.border = '0.1em solid red';
  }
}

function editPhoneNumber(eventTarget) {
  let currentUserInfo = JSON.parse(localStorage.getItem('CurrentLoggedInUser'));
  let allCurrentUsers = JSON.parse(localStorage.getItem('Userlogins'));
  if (
    profilePhoneNumberInput.value.length > 0 &&
    profilePhoneNumberInput.value.length <= 10
  ) {
    if (currentUserInfo !== null && !allCurrentUsers !== null) {
      currentUserInfo.phoneNumber = profilePhoneNumberInput.value;
      localStorage.setItem(
        'CurrentLoggedInUser',
        JSON.stringify(currentUserInfo)
      );
      eventTarget.style.backgroundColor = 'green';
      eventTarget.textContent = 'Editted';
      setTimeout(() => {
        eventTarget.style.backgroundColor = '#302b5e';
        eventTarget.textContent = 'Edit';
      }, 1000);

      let userInStorage;
      let indexOfUserInStorage;
      allCurrentUsers.forEach((item) => {
        if (currentUserInfo.email === item.email) {
          userInStorage = item;
          indexOfUserInStorage = allCurrentUsers.indexOf(item);
        }
      });
      userInStorage.phoneNumber = profilePhoneNumberInput.value;
      allCurrentUsers[indexOfUserInStorage] = userInStorage;
      localStorage.setItem('Userlogins', JSON.stringify(allCurrentUsers));
      profilePhoneNumberInput.style.border = '0.1em solid green';
    } else {
      alert('Something Went Wrong');
    }
  } else {
    profilePhoneNumberInput.style.border = '0.1em solid red';
  }
}
