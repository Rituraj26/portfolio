// Get DOM Elements
// const modal = document.querySelectorAll('.project__overlay');
const modalBtn = document.querySelectorAll('.btn');
const closeBtn = document.querySelectorAll('.project__overlay--close');
const corousal = document.querySelectorAll('.project__overlay');
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');

let current = 0;

// clear all images

reset = () => {
	for(let i = 0; i < corousal.length; i++) {
		corousal[i].style.display = 'none';
	}
}

// initialize slider

startSlide = () => {
	reset();
	corousal[0].style.display = 'block';
}

slideLeft = () => {
	reset();
	console.log(current);
	corousal[current - 1].style.display = 'block';
	current--;
}

slideRight = () => {
	reset();
	console.log(current);
	corousal[current + 1].style.display = 'block';
	current++;
	console.log(current, corousal);
}

changeImageLeft = () => {
	console.log(current);
	if(current === 0) {
		current = corousal.length;
	}
	slideLeft();
}

changeImageRight = () => {
	console.log(current);
	if(current === corousal.length - 1) {
		current = -1;
	}
	slideRight();
}

// Events


for(let i = 0; i < modalBtn.length; i++) {
	leftArrow.addEventListener('click', (e) => changeImageLeft(e));
	rightArrow.addEventListener('click', (e) => changeImageRight(e));
	// console.log(images[i]);
	modalBtn[i].addEventListener('click', startSlide);
	closeBtn[i].addEventListener('click', () => closeModal(corousal[i]));
	window.addEventListener('click', (e) => outsideClick(e, corousal[i]));
}

// Open
// openModal = (m) => {
// 	console.log(current, m);
// 	// reset();
// 	startSlide();
//   	m.style.display = 'block';
// }

// Close
closeModal = (m) => {
	m.style.display = 'none';
	// reset();
}

// Close If Outside Click
outsideClick = (e, m) => {
	if (e.target == m) {
		m.style.display = 'none';
		// reset();
	}
}