let navbar = document.getElementById("main-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("main-nav").offsetHeight;
let navbarLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", e => {
let scrollpos = window.scrollY;
navbarLinks.forEach(link => {
  let section = document.querySelector(link.hash);
  if (section.offsetTop <= scrollpos + 150 &&
      section.offsetTop + section.offsetHeight > scrollpos + 150) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
  
});
});
function reveal() {
let reveals = document.querySelectorAll(".reveal");
for (let i = 0; i < reveals.length; i++) {
  let windowHeight = window.innerHeight;
  let elementTop = reveals[i].getBoundingClientRect().top;
  let elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
}
}
}
window.addEventListener("scroll", reveal);
reveal();

  