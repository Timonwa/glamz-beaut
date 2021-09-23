// * burger menu toggle
// burger menu div
const menu = document.querySelector(".burger-menu");
// add event listener to toggle burger menu
menu.addEventListener("click", function () {
    if (document.querySelector(".open").style.display === "none") {
        document.querySelector(".open").style.display = "block";
        document.querySelector(".close").style.display = "none";
        document.querySelector(".nav-bar").style.top = "-50vh";
    }
    else {
        document.querySelector(".open").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.querySelector(".nav-bar").style.top = "var(--nav-height)";
    }
});