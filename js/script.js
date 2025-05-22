// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Load dark mode preference from localStorage
function loadDarkModePreference() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }
}

// Toggle dark mode and store preference
darkModeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.add("light-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Initialize on page load
loadDarkModePreference();

// Smooth scroll handled by CSS 'scroll-behavior: smooth'

// Contact form validation & alert (you can replace with your own backend or API call)
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple validation check
  if (!form.checkValidity()) {
    alert("Please fill out all required fields correctly.");
    return;
  }

  // Simulate form submission
  alert("Thank you for reaching out! I will get back to you soon.");

  form.reset();
});
