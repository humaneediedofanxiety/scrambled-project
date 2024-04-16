let glowEffect = document.getElementById('glow-effect');
let headerText2 = document.getElementById('hText');
let img = document.getElementById('rose')
let scroll = document.getElementsByClassName('scroll')[0];
let popup = document.getElementsByClassName('overlay')[0];

// Use the corresponding event listener only for its desginated work do not mix event listeners
document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    glowEffect.style.left = (mouseX - glowEffect.offsetWidth / 2) + 'px';
    glowEffect.style.top = (mouseY - glowEffect.offsetHeight / 2) + 'px';
});

// Add mouseover event listeners
headerText2.addEventListener('mouseover', () => {
    glowEffect.classList.add('hoverEff');
});

img.addEventListener('mouseover', () => {
    glowEffect.classList.add('hoverEff');
});

// Add mouseout event listeners
img.addEventListener('mouseout', () => {
    glowEffect.classList.remove('hoverEff');
});

headerText2.addEventListener('mouseout', () => {
    glowEffect.classList.remove('hoverEff');
});

scroll.addEventListener('mouseover', () => scroll.classList.add('scrollHover'))
scroll.addEventListener('mouseout', () => scroll.classList.remove('scrollHover'))

scroll.addEventListener('click', () => {
    popup.classList.add('popup-hover')

    if (popup.classList.contains('popup-hover')) {
          popup.addEventListener('dblclick', () => {
          popup.classList.remove('popup-hover')
        })
    }


}

)
