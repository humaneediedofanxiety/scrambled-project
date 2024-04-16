let textHeading = document.querySelector('h1'); // referencing the H1 object into JS
const glowEffect = document.getElementById('glow-effect'); // referencing the glow div
const h2 = document.querySelector('h2');

textHeading.innerHTML = "hello world";


const randomStr = (length, characters) => {

    let result = "";
    for (let i = 0; i < length; i++) {
        charLength = characters.length
        let randomNum = Math.floor(Math.random() * charLength)
        randomChar = characters.charAt(randomNum);
        result += randomChar;
    }
    return result;
}

const desiredCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let finalResult = randomStr(4000, desiredCharacters);

textHeading.innerHTML = finalResult;

document.addEventListener('mousemove', function () {
    finalResult = randomStr(2000, desiredCharacters);
    textHeading.innerHTML = finalResult;
})

let middleText = document.getElementById('middleText')
const scrambled = 'Oh Is It 19th April Already?';

let finalHead = randomStr(20, desiredCharacters);
middleText.innerHTML = finalHead;

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
        
    })
    
    middleText.addEventListener('click', () => {
       
    })
    
  
});
