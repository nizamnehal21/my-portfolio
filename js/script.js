// Hamburger menu
const toggleButton = document.querySelector('.toggleBtn');
const navbarLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the default behavior of the anchor element
  navbarLinks.classList.toggle('active');
//   remove nav links after clicking a link
    navbarLinks.addEventListener('click', (e) => {
        navbarLinks.classList.remove('active');
    });
});

// Qualification section
let tablinks = document.getElementsByClassName("qualify-links");
let tabcontents = document.getElementsByClassName("qualify-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}

// copyright automatic year update
document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Md Nizamuddin Darbhanga";
  });