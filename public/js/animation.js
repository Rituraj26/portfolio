const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header__content');
const title = document.querySelectorAll('.title');
const underline = document.querySelectorAll('.underline');
const aboutImg = document.querySelector('.about__image');
const aboutPara = document.querySelector('.about__paragraph');
const skillsList = document.querySelector('.skills__list--bar');
const service = document.querySelectorAll('.service');
const projectShape = document.querySelectorAll('.project__shape');
const contactList = document.querySelector('.contact__list');

window.sr = ScrollReveal();

sr.reveal(navbar, {
	duration: 2000, 
	origin: 'bottom'
});
sr.reveal(headerContent, {
	duration: 2000, 
	origin: 'bottom',
	distance: '10rem'
});
sr.reveal(aboutImg, {
	duration: 2000,
	origin: 'left',
	distance: '50rem'
});
sr.reveal(aboutPara, {
	duration: 2000,
	origin: 'right',
	distance: '50rem'
});
sr.reveal(contactList, {
	duration: 4000,
	origin: 'bottom'
	// distance: '50rem'
});

// sr.reveal(aboutPara, {
// 	duration: 2000,
// 	origin: 'right',
// 	distance: '50rem'
// });


// skillsList.classList.add('Skill');

for(let i = 0; i < title.length; i++) {
	sr.reveal(title[i], {
		duration: 1000,
		origin: 'left',
		distance: '50rem'
	});
	sr.reveal(underline[i], {
		delay: 500,
		duration: 1000,
		origin: 'left',
		distance: '50rem'
	});
}

for(let i = 0; i < service.length; i++) {
	sr.reveal(service[i], {
		duration: 2000,
		origin: 'bottom',
		distance: '50rem'
	});
	sr.reveal(projectShape[i], {
		duration: 2000,
		origin: 'bottom',
		distance: '50rem'
	});
}

