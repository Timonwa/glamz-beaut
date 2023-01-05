// * function to close the dropdown menu on smaller screens
function navLinkCloseMenu() {
  document.querySelector(".open").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".nav-links").style.top = "-50vh";
}

// * function to open the dropdown menu on smaller screens
function navLinkOpenMenu() {
  document.querySelector(".open").style.display = "none";
  document.querySelector(".close").style.display = "block";
  document.querySelector(".nav-links").style.top = "60px";
}

// * burger menu toggle
// select burger menu
const menu = document.querySelector(".burger-menu");
// add event listener to toggle burger menu
menu.addEventListener("click", function () {
  if (document.querySelector(".open").style.display === "none") {
    navLinkCloseMenu();
  } else {
    navLinkOpenMenu();
  }
});

// * individual nav links
// when you click on any of the links, the dropdown menu should close
const navLinks = document.querySelectorAll(".nav-link");
for (let link of navLinks) {
  link.addEventListener("click", navLinkCloseMenu);
}
