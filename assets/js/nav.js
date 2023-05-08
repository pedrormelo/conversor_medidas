const navToggle = document.getElementById("nav-toggle");
const navSecond = document.getElementById("second-nav");

navToggle.addEventListener("click", () => {
  navSecond.classList.toggle("active");
});
