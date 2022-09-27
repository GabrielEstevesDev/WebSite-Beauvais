const nav = document.getElementById("navbar");
const page = document.getElementById("page");
const header = document.getElementById("header1");
const navOffsetTop = nav.offsetTop;
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

let toogle = document.querySelector(".toogle");
let body = document.querySelector("body");
let left = document.querySelector(".left");
let tailleNav = nav.offsetHeight;
toogle.addEventListener("click", () => {
  body.classList.toggle("open");
  //left.className = "newLeft";
});
