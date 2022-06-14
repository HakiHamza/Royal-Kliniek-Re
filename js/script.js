// NAVIGATION DROPDOWN

// const el = document.getElementById("icon-hover__dropdown");
// const hiddenDropdown = document.getElementById("dropdown-icon");

// el.addEventListener("mouseover", function handleMouseOver() {
//   hiddenDropdown.style.visibility = "visible";
//   hiddenDropdown.style.opacity = "1";
// });

// el.addEventListener("mouseout", function handleMouseOut() {
//   hiddenDropdown.style.visibility = "hidden";
//   hiddenDropdown.style.opacity = "0";
// });

// TOGLE MENU

const toggle = document.querySelector(".toggle");
const navBar = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navBar.classList.toggle("active");
});

// const menuBtn = document.getElementsByClassName("toggle");
// const mainNav = document.getElementsByClassName("navigation");
// const menu = document.getElementById("menu");

// menuBtn.onclick = function (el) {
//   el.stopPropagation();

//   if (!navBar.classList.contains("active")) {
//     mainNav.classList.add("active");
//     menu.src = "./images/close-icon.png";
//   } else {
//     mainNav.classList.remove("active");
//     menu.src = "./images/menu-icon.png";
//   }
// };

// mainNav.onclick = function (el) {
//   el.stopPropagation();
// };

// document.onclick = function () {
//   mainNav.classList.remove("active");
//   menu.src = "./images/menu-icon.png";
// };
// SMALL CONTACT VISIBILITY

// function smallContact() {
//   document.getElementById("contact").style.visibility = "visible";
// }

// function smallContact() {
//   var hiddenContact = document.getElementById("contact");
//   if (hiddenContact.style.visibility === "hidden") {
//     hiddenContact.style.visibility = "visible";
//   } else {
//     hiddenContact.style.visibility = "hidden";
//   }
// }
