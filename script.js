/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var icon = document.getElementById("menuIcon");
  if (x.className === "topnav") {
    x.className += " responsive";
    // Change icon from bars to times (X)
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    x.className = "topnav";
    // Change icon from times (X) back to bars
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}