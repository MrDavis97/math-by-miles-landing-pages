alert('Hello World');

/* Script for hamburger menu on mobile */
// Set the width of the side navigation to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.borderWidth = "4px";
  document.getElementById("dim").style.display = "block";
}

// Set the width of the side navigation to 0
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.borderWidth = "0px";
  document.getElementById("dim").style.display = "none";
}
