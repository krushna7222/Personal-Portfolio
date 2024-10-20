//  Java Script For Download CV 

document.getElementById('downloadcv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/Resume.pdf'; // Provide the correct path to the resume PDF
    link.download = 'Resume.pdf'; // Specify the default name of the file
    link.click();
});


// JS For Running Text


const textContainer = document.getElementById('text-container');
    const textArray = ["Front-End Developer", "Software Developer", "Website Developer", "React.JS Developer"];
    let arrayIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;  // Time in milliseconds for typing each character
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
        textContainer.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, typingSpeed / 2);
      } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;  // Move to the next text
        setTimeout(typeText, typingSpeed);
      }
    }

    // Start typing the first text
    setTimeout(typeText, delayBetweenTexts);