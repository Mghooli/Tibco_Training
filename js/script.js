'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});
function showCourse() {
     document.getElementById("tibco").style.display = "block";
     }
     const sessionSection = document.querySelector('.session-section');

window.addEventListener('scroll', () => {
  const sectionTop = sessionSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    sessionSection.classList.add('active');
  }
});
function showBasics() {
  const section = document.getElementById("computerBasics");
  section.style.display = "block";

  setTimeout(() => {
    section.classList.add("show");
  }, 50);
}
function showSQL() {
  const section = document.getElementById("sqlSection");
  section.style.display = "block";
  setTimeout(() => section.classList.add("show"), 50);
}
function showService() {
  const section = document.getElementById("serviceManagement");
  section.style.display = "block";
  setTimeout(() => section.classList.add("show"), 50);
}
function showTibcoBW() {
  const section = document.getElementById("tibcoBW");
  section.style.display = "block";
  setTimeout(() => section.classList.add("show"), 50);
}
function showEMS() {
  const section = document.getElementById("emsSection");
  section.style.display = "block";
  setTimeout(() => section.classList.add("show"), 50);
}
function showTools() {
  const section = document.getElementById("toolsSection");
  section.style.display = "block";
  setTimeout(() => section.classList.add("show"), 50);
}
