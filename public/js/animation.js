const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header__content');
const title = document.querySelectorAll('.title');
const underline = document.querySelectorAll('.underline');
const aboutImg = document.querySelector('.about__image');
const aboutPara = document.querySelector('.about__paragraph');

const service = document.querySelectorAll('.service');
// const projectShape = document.querySelectorAll('.project__shape');
const contactList = document.querySelector('.contact__list');

window.sr = ScrollReveal();

// sr.reveal(navbar, {
//     duration: 2000,
//     origin: 'bottom',
// });
// sr.reveal(headerContent, {
//     duration: 2000,
//     origin: 'bottom',
//     distance: '10rem',
// });
sr.reveal(aboutImg, {
    duration: 2000,
    origin: 'bottom',
    distance: '10rem',
});
sr.reveal(aboutPara, {
    duration: 2000,
    origin: 'bottom',
});
sr.reveal(contactList, {
    duration: 4000,
    origin: 'bottom',
});

sr.reveal(skills, {
    viewFactor: 0.2,
    beforeReveal: () => {
        for (let i = 0; i < skillsClass.length; i++) {
            skillsSelector[
                i
            ].style.animation = `${skillsClass[i]} 2s linear .7s forwards`;
        }
    },
});

for (let i = 0; i < title.length; i++) {
    sr.reveal(title[i], {
        duration: 2000,
        opacity: 0,
    });
    sr.reveal(underline[i], {
        duration: 2000,
        opacity: 0,
    });
}

for (let i = 0; i < service.length; i++) {
    sr.reveal(service[i], {
        // duration: 4000,
        origin: 'bottom',
        distance: '30rem',
    });
    // sr.reveal(projectShape[i], {
    // 	// duration: 3000,
    // 	opacity: 0
    // });
}
