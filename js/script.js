// Hamburger menu
const toggleButton = document.querySelector('.toggleBtn');
const navbarLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
});

// Typing animation
const texts = [
 "Front-End Developer",
  "React.js Developer",
  "JavaScript Enthusiast",
  "UI/UX Focused Developer",
  "Responsive Web Designer",
  "Tailwind CSS & Bootstrap Expert",
  "Git & GitHub User",
  "Always Learning New Things"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 60);
  }
})();

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