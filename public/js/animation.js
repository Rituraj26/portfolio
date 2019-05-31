const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header__content');
const title = document.querySelectorAll('.title');
const underline = document.querySelectorAll('.underline');
const aboutImg = document.querySelector('.about__image');
const aboutPara = document.querySelector('.about__paragraph');
const skills = document.querySelector('.skills');
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const sass = document.querySelector('.sass');
const js = document.querySelector('.javascript');
const react = document.querySelector('.react');
const node = document.querySelector('.node');
const express = document.querySelector('.express');
const mongodb = document.querySelector('.mongodb');
const service = document.querySelectorAll('.service');
const projectShape = document.querySelectorAll('.project__shape');
const contactList = document.querySelector('.contact__list');


const skillsClass = ['htmlProg', 'cssProg', 'sassProg', 'jsProg', 'reactProg', 'nodeProg', 'expressProg', 'mongodbProg'];
const skillsSelector = [html, css, sass, js, react, node, express, mongodb];

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
	origin: 'bottom',
	distance: '10rem'
});
sr.reveal(aboutPara, {
	duration: 2000,
	origin: 'bottom'
});
sr.reveal(contactList, {
	duration: 4000,
	origin: 'bottom'
});

sr.reveal(skills, {
	viewFactor: 0.2,
	beforeReveal: () => {
		for(let i = 0; i < skillsClass.length; i++) {
			skillsSelector[i].style.animation = `${skillsClass[i]} 2s linear .7s forwards`;
		}
	}
});

// skills.addEventListener('mouseover', () => {

	// for(let i = 0; i < skillsClass.length; i++) {
	// 	skillsSelector[i].style.animation = `${skillsClass[i]} 2s linear 0s forwards`;
	// }

// });

// 

for(let i = 0; i < title.length; i++) {
	sr.reveal(title[i], {
		duration: 2000,
		opacity: 0
	});
	sr.reveal(underline[i], {
		duration: 2000,
		opacity: 0
	});
}

for(let i = 0; i < service.length; i++) {
	sr.reveal(service[i], {
		duration: 4000,
		origin: 'bottom',
		distance: '30rem'
	});
	sr.reveal(projectShape[i], {
		duration: 3000,
		opacity: 0,
	});
}

