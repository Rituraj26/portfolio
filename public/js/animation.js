const navbar = document.querySelector('.header__content');
const title = document.querySelectorAll('.title');
const underline = document.querySelectorAll('.underline');
const skillsList = document.querySelector('.skills__list--li');

window.sr = ScrollReveal();

sr.reveal(navbar, {
	duration: 2000, 
	origin: 'buttom'
});

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
// sr.reveal(skillsList, {
// 	interval: 200
// });