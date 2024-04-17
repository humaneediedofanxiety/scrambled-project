let textHeading = document.querySelector('h1'); // Reference the H1 element
const glowEffect = document.getElementById('glow-effect'); // Reference the glow div
const middleText = document.getElementById('middleText'); // Reference the middleText element
const desiredCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Function to generate a random string of given length
const randomStr = (length, characters) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomNum);
    }
    return result;
};

// Function to animate text change with scrambling effect
function animateTextChange(element, newText) {
    const textLength = newText.length;
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

// Event listener for touchmove (handling touch screen movements)
document.addEventListener('touchmove', function (event) {
    const touch = event.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;

    // Position the glow effect based on touch coordinates
    handlePositionChange(touchX, touchY);

    // Handle middleText interactions on touch
    middleText.addEventListener('touchstart', function () {
        glowEffect.style.backgroundColor = 'black';
        middleText.classList.toggle('cursor');
        middleText.classList.add('descramble');
        animateTextChange(middleText, "Oh, is it April 19th Already?");
    });

    middleText.addEventListener('touchend', function () {
        glowEffect.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        animateTextChange(middleText, middleText.textContent); // Restore original text
    });
});

// Function to position the glow effect based on cursor coordinates
function handlePositionChange(x, y) {
    glowEffect.style.left = (x - glowEffect.offsetWidth / 2) + 'px';
    glowEffect.style.top = (y - glowEffect.offsetHeight / 2) + 'px';
}

// Initial setup for the textHeading with random string on load
textHeading.textContent = randomStr(4000, desiredCharacters);

// Event listener for mousemove (handling cursor movements)
document.addEventListener('mousemove', function (event) {
    textHeading.textContent = randomStr(2000, desiredCharacters);
    handlePositionChange(event.clientX, event.clientY);
});

// Initialize middleText with scrambled text
const finalHead = randomStr(20, desiredCharacters);
middleText.textContent = finalHead;

// Event listener for mouseover and mouseout (handling cursor interactions)
middleText.addEventListener('mouseover', function () {
    glowEffect.style.backgroundColor = 'black';
    middleText.classList.toggle('cursor');
    middleText.classList.add('descramble');
    animateTextChange(middleText, "Oh, is it April 19th Already?");
});

middleText.addEventListener('mouseout', function () {
    glowEffect.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    animateTextChange(middleText, finalHead); // Restore original text
});
