const loader = document.querySelector('.loading-Gif');
const reserveBtn = document.querySelector('.reserve-final-btn');
const successCon = document.querySelector('.paymentSuccessful');
const firstCon = document.querySelector('.acceptingandreviewContainer');
const closeImg = document.querySelector('.close-Dialog');
const close2 = document.querySelector('.close-Dialog2');
const dialogBox = document.querySelector('.confirmReservation');

function openConfirmBox() {
  dialogBox.classList.add('hellosucces');
  dialogBox.style.display = 'block';
  firstCon.classLis.remove('moveCon');
  loader.classList.add('loaderActive');
}

closeImg.addEventListener('click', () => {
  dialogBox.style.display = 'none';
  firstCon.classLis.remove('moveCon');
  loader.classList.add('loaderActive');
});
close2.addEventListener('click', () => {
  dialogBox.style.display = 'none';
  firstCon.classLis.remove('moveCon');
  loader.classList.add('loaderActive');
});
reserveBtn.addEventListener('click', () => {
  loader.classList.add('loaderActive');
  setTimeout(function moveNextWindow() {
    firstCon.classList.add('moveCon');
    loader.classList.remove('loaderActive');
  }, 6000);
});
