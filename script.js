/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var icon = x.querySelector(".icon i");
  if (x.className === "topnav") {
    x.className += " responsive";
    icon.className = "fa fa-times";
  } else {
    x.className = "topnav";
    icon.className = "fa fa-bars";
  }
}