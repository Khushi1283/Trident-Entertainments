document.addEventListener("DOMContentLoaded", () => {
  // Select all dropdown toggle buttons
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      // Find the next sibling element which is the dropdown menu
      const dropdownMenu = toggle.nextElementSibling;

      // Toggle the 'hidden' class to show or hide the dropdown menu
      if (dropdownMenu.classList.contains("hidden")) {
        // Hide any open dropdown menus before showing the new one
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.classList.add("hidden");
        });

        dropdownMenu.classList.remove("hidden");
      } else {
        dropdownMenu.classList.add("hidden");
      }
    });
  });

  // Clicking outside of an open dropdown menu closes it
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (!menu.contains(e.target)) {
          menu.classList.add("hidden");
        }
      });
    }
  });

  // Mobile menu toggle

  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".navigation-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

//homepage animations
window.addEventListener("scroll", function () {
  var element = document.getElementById("my-text");
  var position = element.getBoundingClientRect();

  // If element is in viewport
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    element.classList.add("animate-on-scroll");
  } else {
    element.classList.remove("animate-on-scroll");
  }
});

//form

// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
// function sendEmail() {
//   const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;
//   Email.send({
//     SecureToken: "ee36bff7-c6de-4edc-9fd6-a5fb5998180c",
//     To: "khushipatil1238@gmail.com",
//     From: email.value,
//     Subject: subject.value,
//     Body: bodyMessage,
//   }).then((message) => {
//     if (message == "OK") {
//       Swal.fire({
//         title: "Successfull",
//         text: "Your Message successfully received",
//         icon: "success",
//       });
//     }
//   });
// }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sendEmail();
// });
