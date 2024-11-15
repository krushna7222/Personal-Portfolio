//  Java Script For Download CV

document.getElementById("downloadcv").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "assets/Resume.pdf"; // Provide the correct path to the resume PDF
  link.download = "Resume.pdf"; // Specify the default name of the file
  link.click();
});

// JS For Running Text

const textContainer = document.getElementById("text-container");
const textArray = [
  "Front-End Developer",
  "Software Developer",
  "Website Developer",
  "React.JS Developer",
];
let arrayIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Time in milliseconds for typing each character
const delayBetweenTexts = 1500; // Delay before starting the next text

function typeText() {
  if (charIndex < textArray[arrayIndex].length) {
    textContainer.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, delayBetweenTexts);
  }
}

function deleteText() {
  if (charIndex > 0) {
    textContainer.textContent = textArray[arrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(deleteText, typingSpeed / 2);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length; // Move to the next text
    setTimeout(typeText, typingSpeed);
  }
}

// Start typing the first text
setTimeout(typeText, delayBetweenTexts);

// On Click Displey Mega-Menu

const menuItem = document.getElementById("menu-item");
const megaMenu = document.getElementById("mega-menu");

// Add click event listener to the menu item
menuItem.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Toggle the visibility of the mega menu
  if (megaMenu.style.display === "block") {
    megaMenu.style.display = "none";
  } else {
    megaMenu.style.display = "block";
  }
});

// Optionally, close the mega menu when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInside =
    menuItem.contains(event.target) || megaMenu.contains(event.target);

  if (!isClickInside) {
    megaMenu.style.display = "none"; // Hide the mega menu if clicked outside
  }
});

function sendEmail() {
  const recipient = "krushnashahane17592@gmail.com";
  const subject = "";
  const body = "";

  // Construct the mailto URL
  const mailtoURL = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the mailto link
  window.location.href = mailtoURL;
}
