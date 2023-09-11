import { baseUrl } from './baseUrl.js'

let formData;
let senderName;
let email;
let message;
let newsletter;
let subscribe;

const contactForm = document.getElementById("contact-form");
const contactFormBox = document.getElementById("contact-form-container");
const popup = document.createElement("div");
popup.className = "popup";
popup.textContent = "Your message has been sent";

// Hide and show nav buttons
const navButtons = document.querySelectorAll('.nav-links li a');
navButtons.forEach((navButton) => {
  if (navButton.innerHTML === 'Contact Us') {
    navButton.classList.add('inactive');
  } else {
    navButton.classList.remove('inactive');
  }
});

const sendEmail = (senderName, email, message, subscribe) => {
  
  console.log("Name: " + senderName);
  console.log("Email: " + email);
  console.log("Message: " + message);
  console.log("Subscribe?: " + subscribe);

  // Send a POST request to the backend endpoint
  fetch(`${baseUrl}/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
    body: JSON.stringify({
      name: senderName,
      email,
      message,
      subscribe,
    }),
    })
    .then((response) => {
        if (response.ok) {
          console.log("Form submission successful");
          contactForm.reset();

          // Display a popup message
          contactFormBox.classList.add("hidden");
          document.body.appendChild(popup);
          setTimeout(() => {
            document.body.removeChild(popup);
            contactFormBox.classList.remove("hidden");
          }, 2000);

        } else {
            console.error("Form submission failed");
            // Handle errors or display an error message to the user
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
  contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      formData = new FormData(contactForm);
      senderName = formData.get("name");
      email = formData.get("email");
      message = formData.get("message");
      newsletter = formData.get("newsletter");
      subscribe = newsletter === "on" ? true : false;

      // Send form data to your server to handle email sending
      sendEmail(senderName, email, message, subscribe);
  });
});
