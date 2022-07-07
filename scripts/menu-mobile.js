const hamburgerIcon = document.querySelector(".hamburger-icon");
const navMobile = document.querySelector(".nav-mobile");
const body = document.querySelector("body");

const lockBodyScroll = () => {
  body.style.overflow === "hidden"
    ? (body.style.overflow = "scroll")
    : (body.style.overflow = "hidden");
};

navMobile.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  navMobile.classList.toggle("active");

  body.style.overflow = "scroll";
});

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  navMobile.classList.toggle("active");

  lockBodyScroll();
});
