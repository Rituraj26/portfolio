// Get DOM Elements
const modal = document.querySelectorAll('.project__overlay');
const modalBtn = document.querySelectorAll('.btn');
const closeBtn = document.querySelectorAll('.project__overlay--close');
// const leftArrow = document.querySelector('#left');
// const rightArrow = document.querySelector('#right');

// let current = 0;

// clear all images

// reset = () => {
// 	for(let i = 0; i < imgPro1.length; i++) {
// 		imgPro1[i].style.display = 'none';
// 	}
// }

// // initialize slider

// startSlide = () => {
// 	reset();
// 	imgPro1[0].style.display = 'block';
// }

// slideLeft = () => {
// 	reset();
// 	imgPro1[current - 1].style.display = 'block';
// 	current--;
// }

// slideRight = () => {
// 	reset();
// 	imgPro1[current + 1].style.display = 'block';
// 	current++;
// }

// changeImageLeft = () => {
// 	console.log(current);
// 	if(current === 0) {
// 		current = imgPro1.length;
// 	}
// 	slideLeft();
// }

// changeImageRight = () => {
// 	if(current ===imgPro1.length - 1) {
// 		current = -1;
// 	}
// 	slideRight();
// }

// Events

// leftArrow.addEventListener('click', (e) => changeImageLeft(e));
// rightArrow.addEventListener('click', (e) => changeImageRight(e));
for(let i = 0; i < modalBtn.length; i++) {
	// console.log(images[i]);
	modalBtn[i].addEventListener('click', () => openModal(modal[i]));
	closeBtn[i].addEventListener('click', () => closeModal(modal[i]));
	window.addEventListener('click', (e) => outsideClick(e, modal[i]));
}

// Open
openModal = (m) => {
	// reset();
	// startSlide();
  	m.style.display = 'block';
}

// Close
closeModal = (m) => {
	m.style.display = 'none';
}

// Close If Outside Click
outsideClick = (e, m) => {
	if (e.target == m) {
		m.style.display = 'none';
	}
}