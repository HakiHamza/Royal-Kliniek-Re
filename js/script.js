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
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

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
