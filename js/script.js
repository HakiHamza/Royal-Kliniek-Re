const el = document.getElementById("icon-hover__dropdown");
const hiddenDropdown = document.getElementById("dropdown-con");

el.addEventListener("mouseover", function handleMouseOver() {
  hiddenDropdown.style.visibility = "visible";
  hiddenDropdown.style.opacity = "1";
});

el.addEventListener("mouseout", function handleMouseOut() {
  hiddenDropdown.style.visibility = "hidden";
  hiddenDropdown.style.opacity = "0";
});
