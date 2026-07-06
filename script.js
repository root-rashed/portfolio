// Show current year in footer
var yearEl = document.getElementById("year");
var currentYear = new Date().getFullYear();
yearEl.textContent = "© " + currentYear + " Rashedul Islam. All rights reserved.";

// Simple button click message
var hireBtn = document.getElementById("hireBtn");
var hireMsg = document.getElementById("hireMsg");

hireBtn.addEventListener("click", function () {
  hireMsg.textContent = "Thanks for stopping by! Feel free to reach out via email or LinkedIn.";
});
