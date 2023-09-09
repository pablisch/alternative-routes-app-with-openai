// Hide and show nav buttons
const navButtons = document.querySelectorAll('.nav-links li a');
navButtons.forEach((navButton) => {
  if (navButton.innerHTML === "About") {
    navButton.classList.add('inactive');
  } else {
    navButton.classList.remove('inactive');
  }
});