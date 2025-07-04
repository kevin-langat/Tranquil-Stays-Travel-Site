const otherCon = document.getElementById('othercities');
const lefC = document.getElementById('left-column');
const london = document.getElementById('london');
const phuket = document.getElementById('phuket');
const paris = document.getElementById('paris');
const dubai = document.getElementById('dubai');
const nairobi = document.getElementById('nairobi');
const shanghai = document.getElementById('shanghai');
const head = document.getElementById('headingTitle');
const houseimageOne = document.querySelector('.house-image-One');
const houseimageTwo = document.querySelector('.house-image-Two');
const houseimageThree = document.querySelector('.house-image-Three');
const houseimageFour = document.querySelector('.house-image-Four');
const houseimageFive = document.querySelector('.house-image-Five');
const houseimageSix = document.querySelector('.house-image-Six');
const houseimageSeven = document.querySelector('.house-image-Seven');
const houseimageEigth = document.querySelector('.house-image-Eigth');
const houseimageNine = document.querySelector('.house-image-Nine');
const houseimageTen = document.querySelector('.house-image-Ten');
// house names
const nameOne = document.querySelector('.house-name-one');
const nameTwo = document.querySelector('.house-name-two');
const nameThree = document.querySelector('.house-name-three');
const nameFour = document.querySelector('.house-name-four');
const nameFive = document.querySelector('.house-name-five');
const nameSix = document.querySelector('.house-name-six');
const nameSeven = document.querySelector('.house-name-seven');
const nameEigth = document.querySelector('.house-name-eigth');
const nameNine = document.querySelector('.house-name-nine');
const nameTen = document.querySelector('.house-name-ten');
// buttons
const buttonOne = document.querySelector('.button-listing-one');
const buttonTwo = document.querySelector('.button-listing-two');
const buttonThree = document.querySelector('.button-listing-three');
const buttonFour = document.querySelector('.button-listing-four');
const buttonFive = document.querySelector('.button-listing-five');
const buttonSix = document.querySelector('.button-listing-six');
const buttonSeven = document.querySelector('.button-listing-seven');
const buttonEigth = document.querySelector('.button-listing-eigth');
const buttonNine = document.querySelector('.button-listing-nine');
const buttonTen = document.querySelector('.button-listing-ten');
// Amenities
const amenityOne = document.querySelector('.amenityOne');
const amenityTwo = document.querySelector('.amenityTwo');
const amenityThree = document.querySelector('.amenityThree');
const amenityFour = document.querySelector('.amenityFour');
const amenityFive = document.querySelector('.amenityFive');
//Svg Codes
const BooksSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-books">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                                    <path
                                        d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                                    <path d="M5 8h4" />
                                    <path d="M9 16h4" />
                                    <path
                                        d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
                                    <path d="M14 9l4 -1" />
                                    <path d="M16 16l3.923 -.98" />
        </svg>`;

const dishWasherSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-bubbles-icon lucide-bubbles">
                                    <path d="M7.2 14.8a2 2 0 0 1 2 2" />
                                    <circle cx="18.5" cy="8.5" r="3.5" />
                                    <circle cx="7.5" cy="16.5" r="5.5" />
                                    <circle cx="7.5" cy="4.5" r="2.5" />
        </svg>`;
const gymnSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-dumbbell-icon lucide-dumbbell">
                                    <path
                                        d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
                                    <path d="m2.5 21.5 1.4-1.4" />
                                    <path d="m20.1 3.9 1.4-1.4" />
                                    <path
                                        d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
                                    <path d="m9.6 14.4 4.8-4.8" />
        </svg>`;
const elevatorSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-escalator-up">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M19.5 7h-2.672a2 2 0 0 0 -1.414 .586l-8.414 8.414h-2.5a2.5 2.5 0 1 0 0 5h3.672a2 2 0 0 0 1.414 -.586l8.414 -8.414h1.5a2.5 2.5 0 1 0 0 -5z" />
                                    <path d="M6 10v-7" />
                                    <path d="M3 6l3 -3l3 3" />
        </svg>`;
const coffeeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-coffee">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
                                    <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                                    <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                                    <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
                                    <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
        </svg>`;
const wifiSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-wifi">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 18l.01 0" />
                                    <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
                                    <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
                                    <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
        </svg>`;
const furnitureSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-sofa">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z" />
                                    <path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3" />
                                    <path d="M12 5v9" />
        </svg>`;

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('houselisting.html')) {
    let currentActiveTab = JSON.parse(
      localStorage.getItem('HouseListingActiveTab')
    );
    if (currentActiveTab === 1) {
      phuFunc();
      console.log('london function');
    } else if (currentActiveTab === 2) {
      lonFunc();
    } else if (currentActiveTab === 3) {
      parFunc();
    } else if (currentActiveTab === 4) {
      dubFunc();
    } else if (currentActiveTab === 5) {
      naiFunc();
    } else if (currentActiveTab === 6) {
      shaFunc();
    }
  }
});
function phuFunc() {
  phuket.style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px blue';
  london.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  paris.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  dubai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  nairobi.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  shanghai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  head.innerHTML = 'Listings In Phuket';
  houseimageOne.src = 'img/img20.jpg';
  houseimageTwo.src = 'img/img2.jpeg';
  houseimageThree.src = 'img/img3.jpeg';
  houseimageFour.src = 'img/img4.jpeg';
  houseimageFive.src = 'img/img5.jpg';
  houseimageSix.src = 'img/img6.jpeg';
  houseimageSeven.src = 'img/img7.jpeg';
  houseimageEigth.src = 'img/img8.jpeg';
  houseimageNine.src = 'img/img9.jpeg';
  houseimageTen.src = 'img/img10.jpeg';
  nameOne.innerHTML = 'Beachside Bungalow with Hammock';
  nameTwo.innerHTML = 'Oceanfront King Suite with Balcony';
  nameThree.innerHTML = 'Cozy Studio in Downtown Phuket';
  nameFour.innerHTML = 'Modern Loft with City Skyline View';
  nameFive.innerHTML = 'Luxury Villa with Private Poo';
  nameSix.innerHTML = 'Rustic Cabin Near the Lake';
  nameSeven.innerHTML = 'Charming Cottage with Flower Garden';
  nameEigth.innerHTML = 'Elegant Penthouse Overlooking Central Park';
  nameNine.innerHTML = 'Villa in Downtown Phuket';
  nameTen.innerHTML = 'Modern Bungallow With City Skyline';
  buttonOne.setAttribute('onclick', 'viewDetailsByIndex(0)');
  buttonTwo.setAttribute('onclick', 'viewDetailsByIndex(1)');
  buttonThree.setAttribute('onclick', 'viewDetailsByIndex(2)');
  buttonFour.setAttribute('onclick', 'viewDetailsByIndex(3)');
  buttonFive.setAttribute('onclick', 'viewDetailsByIndex(4)');
  buttonSix.setAttribute('onclick', 'viewDetailsByIndex(5)');
  buttonSeven.setAttribute('onclick', 'viewDetailsByIndex(6)');
  buttonEigth.setAttribute('onclick', 'viewDetailsByIndex(7)');
  buttonNine.setAttribute('onclick', 'viewDetailsByIndex(8)');
  buttonTen.setAttribute('onclick', 'viewDetailsByIndex(9)');
  amenityOne.innerHTML = `${coffeeSvg} Coffee Maker`;
  amenityTwo.innerHTML = `${furnitureSvg} Furniture`;
  amenityFive.innerHTML = `${wifiSvg} Wifi`;
  localStorage.setItem('HouseListingActiveTab', JSON.stringify(1));
}
function lonFunc() {
  london.style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px blue';
  phuket.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  paris.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  dubai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  nairobi.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  shanghai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  head.innerHTML = 'Listings In London';
  houseimageOne.src = 'img/img11.jpeg';
  houseimageTwo.src = 'img/img12.jpeg';
  houseimageThree.src = 'img/img13.jpg';
  houseimageFour.src = 'img/img14.jpeg';
  houseimageFive.src = 'img/img15.jpeg';
  houseimageSix.src = 'img/img16.jpg';
  houseimageSeven.src = 'img/img17.jpeg';
  houseimageEigth.src = 'img/img18.jpeg';
  houseimageNine.src = 'img/img19.jpg';
  houseimageTen.src = 'img/img20.jpg';
  nameOne.innerHTML = 'Ocean Whisper Retreat';
  nameTwo.innerHTML = 'Urban Nest Loft';
  nameThree.innerHTML = 'Golden Dune Getaway';
  nameFour.innerHTML = 'Skyline Serenity';
  nameFive.innerHTML = 'Treetop Haven';
  nameSix.innerHTML = 'Cozy Compass Cabin';
  nameSeven.innerHTML = 'The Sunset Alcove';
  nameEigth.innerHTML = 'Nomad’s Nook';
  nameNine.innerHTML = 'Bamboo Breeze Villa';
  nameTen.innerHTML = 'Hilltop Harmony';
  buttonOne.setAttribute('onclick', 'viewDetailsByIndex(10)');
  buttonTwo.setAttribute('onclick', 'viewDetailsByIndex(11)');
  buttonThree.setAttribute('onclick', 'viewDetailsByIndex(12)');
  buttonFour.setAttribute('onclick', 'viewDetailsByIndex(13)');
  buttonFive.setAttribute('onclick', 'viewDetailsByIndex(14)');
  buttonSix.setAttribute('onclick', 'viewDetailsByIndex(15)');
  buttonSeven.setAttribute('onclick', 'viewDetailsByIndex(16)');
  buttonEigth.setAttribute('onclick', 'viewDetailsByIndex(17)');
  buttonNine.setAttribute('onclick', 'viewDetailsByIndex(18)');
  buttonTen.setAttribute('onclick', 'viewDetailsByIndex(19)');
  amenityOne.innerHTML = `${elevatorSvg} Elevator`;
  amenityTwo.innerHTML = `${BooksSvg} Books`;
  amenityFive.innerHTML = `${gymnSvg} Gymn`;
  amenityFour.innerHTML = `${dishWasherSvg} Dish Washer`;
  amenityThree.innerHTML = `${coffeeSvg} Coffee Maker`;
  localStorage.setItem('HouseListingActiveTab', JSON.stringify(2));
}

function parFunc() {
  paris.style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px blue';
  phuket.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  london.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  dubai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  nairobi.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  shanghai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  head.innerHTML = 'Listings In Paris';
  houseimageOne.src = 'img/img21.jpeg';
  houseimageTwo.src = 'img/img22.jpeg';
  houseimageThree.src = 'img/img23.jpeg';
  houseimageFour.src = 'img/img24.jpeg';
  houseimageFive.src = 'img/img25.jpeg';
  houseimageSix.src = 'img/img26.jpeg';
  houseimageSeven.src = 'img/img27.jpeg';
  houseimageEigth.src = 'img/img28.jpeg';
  houseimageNine.src = 'img/img29.jpeg';
  houseimageTen.src = 'img/img30.jpg';
  nameOne.innerHTML = 'Sapphire Sands Escape';
  nameTwo.innerHTML = 'Alpine Dream Lodge';
  nameThree.innerHTML = 'Tranquil Trails Cottage';
  nameFour.innerHTML = 'Palm Light Bungalow';
  nameFive.innerHTML = 'Aurora Rest House';
  nameSix.innerHTML = 'Riverside Ember Inn';
  nameSeven.innerHTML = 'Starfall Studio';
  nameEigth.innerHTML = 'The Hideout Hollow';
  nameNine.innerHTML = 'Mystic Lake Cottage';
  nameTen.innerHTML = 'Sunrise Summit';
  buttonOne.setAttribute('onclick', 'viewDetailsByIndex(20)');
  buttonTwo.setAttribute('onclick', 'viewDetailsByIndex(21)');
  buttonThree.setAttribute('onclick', 'viewDetailsByIndex(22)');
  buttonFour.setAttribute('onclick', 'viewDetailsByIndex(23)');
  buttonFive.setAttribute('onclick', 'viewDetailsByIndex(24)');
  buttonSix.setAttribute('onclick', 'viewDetailsByIndex(25)');
  buttonSeven.setAttribute('onclick', 'viewDetailsByIndex(26)');
  buttonEigth.setAttribute('onclick', 'viewDetailsByIndex(27)');
  buttonNine.setAttribute('onclick', 'viewDetailsByIndex(28)');
  buttonTen.setAttribute('onclick', 'viewDetailsByIndex(29)');
  amenityOne.innerHTML = `${BooksSvg} Books`;
  amenityTwo.innerHTML = `${coffeeSvg} Coffee Maker`;
  amenityFive.innerHTML = `${furnitureSvg} Furniture`;
  amenityFour.innerHTML = `${elevatorSvg} Elevator`;
  amenityThree.innerHTML = `${gymnSvg} Gymn`;
  localStorage.setItem('HouseListingActiveTab', JSON.stringify(3));
}
function dubFunc() {
  dubai.style.boxShadow = ' 0 0 0 2px #fff, 0 0 0 4px blue';
  phuket.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  paris.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  london.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  nairobi.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  shanghai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  head.innerHTML = 'Listings In Dubai';
  houseimageOne.src = 'img/img31.jpeg';
  houseimageTwo.src = 'img/img32.jpg';
  houseimageThree.src = 'img/img33.jpg';
  houseimageFour.src = 'img/img34.jpeg';
  houseimageFive.src = 'img/img35.jpeg';
  houseimageSix.src = 'img/img36.jpeg';
  houseimageSeven.src = 'img/img37.jpeg';
  houseimageEigth.src = 'img/img38.jpeg';
  houseimageNine.src = 'img/img39.jpeg';
  houseimageTen.src = 'img/img40.jpg';
  nameOne.innerHTML = 'Jungle Echo Stay';
  nameTwo.innerHTML = 'Willow Whisper Cabin';
  nameThree.innerHTML = 'Moonstone Retreat';
  nameFour.innerHTML = 'Coral Coast Cottage';
  nameFive.innerHTML = 'Vintage Vibe Loft';
  nameSix.innerHTML = 'Lush Lagoon Lodge';
  nameSeven.innerHTML = 'Desert Mirage Inn';
  nameEigth.innerHTML = 'Coconut Coast Retreat';
  nameNine.innerHTML = 'Canyon Glow Getaway';
  nameTen.innerHTML = 'Harbor Nest Hideaway';
  buttonOne.setAttribute('onclick', 'viewDetailsByIndex(30)');
  buttonTwo.setAttribute('onclick', 'viewDetailsByIndex(31)');
  buttonThree.setAttribute('onclick', 'viewDetailsByIndex(32)');
  buttonFour.setAttribute('onclick', 'viewDetailsByIndex(33)');
  buttonFive.setAttribute('onclick', 'viewDetailsByIndex(34)');
  buttonSix.setAttribute('onclick', 'viewDetailsByIndex(35)');
  buttonSeven.setAttribute('onclick', 'viewDetailsByIndex(36)');
  buttonEigth.setAttribute('onclick', 'viewDetailsByIndex(37)');
  buttonNine.setAttribute('onclick', 'viewDetailsByIndex(38)');
  buttonTen.setAttribute('onclick', 'viewDetailsByIndex(39)');
  amenityOne.innerHTML = `${BooksSvg} Books`;
  amenityTwo.innerHTML = `${elevatorSvg} Elevator`;
  amenityThree.innerHTML = `${coffeeSvg} Coffee Maker`;
  amenityFive.innerHTML = `${furnitureSvg} Furniture`;
  amenityFour.innerHTML = `${gymnSvg} Gymn`;
  localStorage.setItem('HouseListingActiveTab', JSON.stringify(4));
}
function naiFunc() {
  nairobi.style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px blue';
  phuket.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  paris.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  dubai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  london.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  shanghai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  head.innerHTML = 'Listings In Nairobi';
  houseimageOne.src = 'img/img41.jpg';
  houseimageTwo.src = 'img/img42.jpg';
  houseimageThree.src = 'img/img43.jpeg';
  houseimageFour.src = 'img/img44.jpeg';
  houseimageFive.src = 'img/img5.jpg';
  houseimageSix.src = 'img/img46.jpeg';
  houseimageSeven.src = 'img/img47.jpg';
  houseimageEigth.src = 'img/img48.jpeg';
  houseimageNine.src = 'img/img49.jpeg';
  houseimageTen.src = 'img/img50.jpg';
  nameOne.innerHTML = 'Pebble Path Haven';
  nameTwo.innerHTML = 'The Driftwood House';
  nameThree.innerHTML = 'Eclipse Horizon Villa';
  nameFour.innerHTML = 'Windswept Escape';
  nameFive.innerHTML = 'Snowfall Nook';
  nameSix.innerHTML = 'Forest Bloom Lodge';
  nameSeven.innerHTML = 'Seabreeze Sanctuary';
  nameEigth.innerHTML = 'The Lantern Loft';
  nameNine.innerHTML = 'The Honeycomb Haven';
  nameTen.innerHTML = 'Tide Whisperer Villa';
  buttonOne.setAttribute('onclick', 'viewDetailsByIndex(40)');
  buttonTwo.setAttribute('onclick', 'viewDetailsByIndex(41)');
  buttonThree.setAttribute('onclick', 'viewDetailsByIndex(42)');
  buttonFour.setAttribute('onclick', 'viewDetailsByIndex(43)');
  buttonFive.setAttribute('onclick', 'viewDetailsByIndex(44)');
  buttonSix.setAttribute('onclick', 'viewDetailsByIndex(45)');
  buttonSeven.setAttribute('onclick', 'viewDetailsByIndex(46)');
  buttonEigth.setAttribute('onclick', 'viewDetailsByIndex(47)');
  buttonNine.setAttribute('onclick', 'viewDetailsByIndex(48)');
  buttonTen.setAttribute('onclick', 'viewDetailsByIndex(49)');
  amenityOne.innerHTML = `${elevatorSvg} Elevator`;
  amenityTwo.innerHTML = `${coffeeSvg} Coffee Maker`;
  amenityFive.innerHTML = `${gymnSvg} Gymn`;
  amenityFour.innerHTML = `${dishWasherSvg} Dish Washer`;
  amenityThree.innerHTML = `${BooksSvg} Books`;
  localStorage.setItem('HouseListingActiveTab', JSON.stringify(5));
}
function shaFunc() {
  shanghai.style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px blue';
  phuket.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  paris.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  dubai.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  nairobi.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  london.style.boxShadow = '0 0 0 1px #fff, 0 0 0 2px black';
  head.innerHTML = 'Listings In Shanghai';
  houseimageOne.src = 'img/img51.jpeg';
  houseimageTwo.src = 'img/img52.jpeg';
  houseimageThree.src = 'img/img53.jpeg';
  houseimageFour.src = 'img/img54.jpeg';
  houseimageFive.src = 'img/img55.jpeg';
  houseimageSix.src = 'img/img56.jpg';
  houseimageSeven.src = 'img/img57.jpeg';
  houseimageEigth.src = 'img/img58.jpg';
  houseimageNine.src = 'img/img59.jpeg';
  houseimageTen.src = 'img/img60.jpeg';
  nameOne.innerHTML = 'Cloud Nine Cottage';
  nameTwo.innerHTML = 'Sunbeam Studio Stay';
  nameThree.innerHTML = 'The Maple Moon Retreat';
  nameFour.innerHTML = 'Haven on the Hill';
  nameFive.innerHTML = 'Olive Grove Oasis';
  nameSix.innerHTML = 'The Rustic Pearl';
  nameSeven.innerHTML = 'Wanderlight Studio';
  nameEigth.innerHTML = 'The Nomadic Nest';
  nameNine.innerHTML = 'Twilight Trail Cabin';
  nameTen.innerHTML = 'Riverside Nest Loft';
  buttonOne.setAttribute('onclick', 'viewDetailsByIndex(50)');
  buttonTwo.setAttribute('onclick', 'viewDetailsByIndex(51)');
  buttonThree.setAttribute('onclick', 'viewDetailsByIndex(52)');
  buttonFour.setAttribute('onclick', 'viewDetailsByIndex(53)');
  buttonFive.setAttribute('onclick', 'viewDetailsByIndex(54)');
  buttonSix.setAttribute('onclick', 'viewDetailsByIndex(55)');
  buttonSeven.setAttribute('onclick', 'viewDetailsByIndex(56)');
  buttonEigth.setAttribute('onclick', 'viewDetailsByIndex(57)');
  buttonNine.setAttribute('onclick', 'viewDetailsByIndex(58)');
  buttonTen.setAttribute('onclick', 'viewDetailsByIndex(59)');
  amenityOne.innerHTML = `${BooksSvg} Books`;
  amenityTwo.innerHTML = `${dishWasherSvg} Dish Washer`;
  amenityFive.innerHTML = `${gymnSvg} Gymn`;
  amenityFour.innerHTML = `${furnitureSvg} Furniture `;
  amenityThree.innerHTML = `${wifiSvg} Wifi`;
  localStorage.setItem('HouseListingActiveTab', JSON.stringify(6));
}
