// * burger menu toggle
// burger menu div
const menu = document.querySelector(".burger-menu");
// add event listener to toggle burger menu
menu.addEventListener("click", function () {
    if (document.querySelector(".open").style.display === "block") {
        document.querySelector(".open").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.querySelector(".nav-bar").style.zIndex = "1";
    }
    else {
        document.querySelector(".open").style.display = "block";
        document.querySelector(".close").style.display = "none";
        document.querySelector(".nav-bar").style.zIndex = "-1";
    }
});

//* adding active state to current webpage viewed by the user
// if current file path of webpage in view is same as the file path of the nav link that was clicked, then that nav link should have a class of .active
const navLinks = document.querySelectorAll(".nav-link");
for (i of navLinks) {
    var path = window.location.href;
    if (i.href === path) {
        i.classList.add("active");
    }
}
