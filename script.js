let glowEffect = document.getElementById('glow-effect');
let headerText2 = document.getElementById('hText');
let img = document.getElementById('rose');
let scroll = document.getElementsByClassName('scroll')[0];
let popup = document.getElementsByClassName('overlay')[0];

// Function to handle mouse movement or touch position
function handlePositionChange(x, y) {
    glowEffect.style.left = (x - glowEffect.offsetWidth / 2) + 'px';
    glowEffect.style.top = (y - glowEffect.offsetHeight / 2) + 'px';
}

// Mousemove event for desktop
document.addEventListener('mousemove', function (event) {
    handlePositionChange(event.clientX, event.clientY);
});

// Touchmove event for mobile and tablets
document.addEventListener('touchmove', function (event) {
    const touch = event.touches[0];
    handlePositionChange(touch.clientX, touch.clientY);
});

// Mouseover and touchstart event for headerText2 and img
function addGlowEffect() {
    glowEffect.classList.add('hoverEff');
}

function removeGlowEffect() {
    glowEffect.classList.remove('hoverEff');
}

headerText2.addEventListener('mouseover', addGlowEffect);
headerText2.addEventListener('touchstart', addGlowEffect);

img.addEventListener('mouseover', addGlowEffect);
img.addEventListener('touchstart', addGlowEffect);

headerText2.addEventListener('mouseout', removeGlowEffect);
headerText2.addEventListener('touchend', removeGlowEffect);

img.addEventListener('mouseout', removeGlowEffect);
img.addEventListener('touchend', removeGlowEffect);

// Mouseover and touchstart event for scroll
scroll.addEventListener('mouseover', () => scroll.classList.add('scrollHover'));
scroll.addEventListener('touchstart', () => scroll.classList.add('scrollHover'));

// Mouseout and touchend event for scroll
scroll.addEventListener('mouseout', () => scroll.classList.remove('scrollHover'));
scroll.addEventListener('touchend', () => scroll.classList.remove('scrollHover'));

// Click event for popup
scroll.addEventListener('click', () => {
    popup.classList.add('popup-hover');
    popup.addEventListener('dblclick', () => popup.classList.remove('popup-hover'))

    // Double tap event (touchstart and touchend)
    let tapCount = 0;
    const maxTapInterval = 300; // Adjust as needed for double tap speed

    scroll.addEventListener('touchstart', function(event) {
        tapCount++;
        if (tapCount === 2) {
            tapCount = 0;
            popup.classList.remove('popup-hover');
        }
        setTimeout(() => {
            tapCount = 0;
        }, maxTapInterval);
    });
});

