// Get DOM Elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar__links');
const modal = document.querySelectorAll('.project__overlay');
const modalBtn = document.querySelectorAll('.btn');
const closeBtn = document.querySelectorAll('.project__overlay--close');

burger.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', () => openModal(modal[i]));
    closeBtn[i].addEventListener('click', () => closeModal(modal[i]));
    window.addEventListener('click', (e) => outsideClick(e, modal[i]));
}

// Open
openModal = (m) => {
    m.style.display = 'block';
};

// Close
closeModal = (m) => {
    m.style.display = 'none';
    // reset();
};

// Close If Outside Click
outsideClick = (e, m) => {
    if (e.target == m) {
        m.style.display = 'none';
        // reset();
    }
};
