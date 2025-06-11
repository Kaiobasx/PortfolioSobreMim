const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section[id]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(el => el.classList.remove('ativo'));
        this.classList.add('ativo');
    });
});

window.addEventListener('scroll', () => {
    let currentActiveSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const offset = 150;

        if (sectionTop <= offset && sectionTop > -section.offsetHeight + offset) {
            currentActiveSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('ativo');
        if (link.getAttribute('href').includes(currentActiveSectionId) && currentActiveSectionId !== '') {
            link.classList.add('ativo');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    window.dispatchEvent(new Event('scroll'));
});

const typingElement = document.querySelector('.hero-cargo');
const originalText = typingElement.textContent;
typingElement.textContent = '';

let charIndex = 0;
const typingSpeed = 70;
const pauseTime = 1500;

function typeWriter(textToType, currentElement, callback) {
    if (charIndex < textToType.length) {
        currentElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(() => typeWriter(textToType, currentElement, callback), typingSpeed);
    } else {
        if (callback) {
            setTimeout(callback, pauseTime);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        charIndex = 0;
        typeWriter(originalText, typingElement, null);
    }, 500);
});