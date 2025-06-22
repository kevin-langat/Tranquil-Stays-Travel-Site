const floatingCon = document.querySelector('.right-col-content');

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

  if (scrolledPercentage >= 96.5) {
    floatingCon.style.marginTop = '-35%';
  } else {
    floatingCon.style.marginTop = '0%';
  }
}
