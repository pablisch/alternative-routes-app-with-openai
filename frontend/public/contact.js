let formData;
let senderName;
let email;
let message;
let newsletter;



// Hide and show nav buttons
const navButtons = document.querySelectorAll('.nav-links li a');
navButtons.forEach((navButton) => {
  if (navButton.innerHTML === 'Contact Us') {
    navButton.classList.add('inactive');
  } else {
    navButton.classList.remove('inactive');
  }
});

const sendEmail = (senderName, email, message, newsletter) => {
  
  console.log("Name: " + senderName);
  console.log("Email: " + email);
  console.log("Message: " + message);
  console.log("Newsletter: " + newsletter);

  // Send a POST request to the backend endpoint
  fetch("http://localhost:4000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
    // body: JSON.stringify(formData),
    body: JSON.stringify({
      name: senderName,
      email: email,
      message: message,
      newsletter: newsletter,
    }),
    })
    .then((response) => {
        if (response.ok) {
            // Form submission was successful
            console.log("Form submission successful");
            // You can redirect to a thank you page or display a success message here
        } else {
            // Form submission failed
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
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      formData = new FormData(contactForm);
      senderName = formData.get("name");
      email = formData.get("email");
      message = formData.get("message");
      newsletter = formData.get("newsletter");

      // Send form data to your server to handle email sending
      sendEmail(senderName, email, message, newsletter);
  });
});
