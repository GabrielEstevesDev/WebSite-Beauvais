const nav = document.getElementById("navbar");
const page = document.getElementById("page");
const header = document.getElementById("header1");
const navOffsetTop = nav.offsetTop;
// const navOffsetHeight = nav.offsetHeight;
// const headerOffsetHeight = header.offsetHeight;
window.addEventListener("scroll", () => {
  if (window.scrollY >= navOffsetTop) {
    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.left = "50%";
    nav.style.transform = "translateX(-50%)";
  } else {
    nav.style.position = "static";
    nav.style.transform = "translateX(0)";
  }
});
