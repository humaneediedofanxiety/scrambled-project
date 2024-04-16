let textHeading = document.querySelector('h1'); // referencing the H1 object into JS
const glowEffect = document.getElementById('glow-effect'); // referencing the glow div
const h2 = document.querySelector('h2');

textHeading.innerHTML = "hello world";

const randomStr = (length, characters) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        charLength = characters.length;
        let randomNum = Math.floor(Math.random() * charLength);
        randomChar = characters.charAt(randomNum);
        result += randomChar;
    }
    return result;
}

const desiredCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let finalResult = randomStr(4000, desiredCharacters);

textHeading.innerHTML = finalResult;

// Function to generate randomized text on mouse or touch movement
function updateRandomText() {
    finalResult = randomStr(2000, desiredCharacters);
    textHeading.innerHTML = finalResult;
}

document.addEventListener('mousemove', updateRandomText);
document.addEventListener('touchmove', updateRandomText);

let middleText = document.getElementById('middleText');
const scrambledText = 'Oh Is It 19th April Already?';

middleText.innerHTML = scrambledText;

function animateTextChange(element, newText) {
    const textLength = newText.length - 3;
    let currentIndex = 0;

    const intervalId = setInterval(() => {
        if (currentIndex < textLength) {
            const scrambledText = newText.substring(0, currentIndex) +
                randomStr(textLength - currentIndex, desiredCharacters);
            element.textContent = scrambledText;
            currentIndex++;
        } else {
            clearInterval(intervalId);
            element.textContent = newText; // Ensure final text is displayed correctly
            element.classList.remove('descramble'); // Remove descramble class after animation
        }
    }, 20); // Adjust the interval for desired animation speed
}

// Event listener for middleText mouseover and touchstart
middleText.addEventListener('mouseover', function() {
    glowEffect.style.backgroundColor = 'black';
    middleText.classList.toggle('cursor');
    middleText.classList.add('descramble');
    animateTextChange(middleText, "Oh, is it April 19th Already?");

    middleText.addEventListener('mouseout', function() {
        glowEffect.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        animateTextChange(middleText, scrambledText);
    });

    // Touch event equivalent for mobile
    middleText.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        glowEffect.style.backgroundColor = 'black';
        middleText.classList.toggle('cursor');
        middleText.classList.add('descramble');
        animateTextChange(middleText, "Oh, is it April 19th Already?");

        // Touch end event to revert animation
        middleText.addEventListener('touchend', function() {
            glowEffect.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            animateTextChange(middleText, scrambledText);
        });
    });
});

// Optional: Add touch event for clickable actions (e.g., middleText click)
middleText.addEventListener('click', function() {
    // Add your click event handling here
});

document.addEventListener('mousemove', function(event) {
  const mouseX = event.clientX;
    const mouseY = event.clientY;
    
function animateTextChange(element, newText) {
  const textLength = newText.length - 3;
  let currentIndex = 0;

  const intervalId = setInterval(() => {
    if (currentIndex < textLength) {
      const scrambledText = newText.substring(0, currentIndex) +
        randomStr(textLength - currentIndex, desiredCharacters);
      element.textContent = scrambledText;
      currentIndex++;
    } else {
      clearInterval(intervalId);
      element.textContent = newText; // Ensure final text is displayed correctly
      element.classList.remove('descramble'); // Remove descramble class after animation
    }
  }, 20); // Adjust the interval for desired animation speed
}
  
  // Glow Effect Surrounding Mouse Pointer
  glowEffect.style.left = (mouseX - glowEffect.offsetWidth / 2) + 'px';
  glowEffect.style.top = (mouseY - glowEffect.offsetHeight / 2) + 'px';
    
  middleText.addEventListener('mouseover', () => {
    glowEffect.style.backgroundColor = 'black'
    middleText.classList.toggle('cursor')
    middleText.classList.add('descramble')
    animateTextChange(middleText, "Oh, is it April 19th Already?");

    middleText.addEventListener('mouseout', () => {
      glowEffect.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
      animateTextChange(middleText, finalHead);
    })
  })})
