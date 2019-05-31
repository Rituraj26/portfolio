// Get DOM Elements

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar__links');
const modal = document.querySelectorAll('.project__overlay');
const modalBtn = document.querySelectorAll('.btn');
const closeBtn = document.querySelectorAll('.project__overlay--close');
// const modal = document.querySelectorAll('.project__overlay');
// const leftArrow = document.querySelector('#left');
// const rightArrow = document.querySelector('#right');



// Events

// leftArrow.addEventListener('click', (e) => changeImageLeft(e));
// rightArrow.addEventListener('click', (e) => changeImageRight(e));

burger.addEventListener('click', () => {
	if(nav.style.display === 'block') {
		nav.style.display = 'none';
	} else {
		nav.style.display = 'block';
	}
});
for(let i = 0; i < modalBtn.length; i++) {
	modalBtn[i].addEventListener('click', () => openModal(modal[i]));
	closeBtn[i].addEventListener('click', () => closeModal(modal[i]));
	window.addEventListener('click', (e) => outsideClick(e, modal[i]));
}

// Open
openModal = (m) => {
	// console.log(current, m);
	// reset();
	// startSlide();
  	m.style.display = 'block';
}

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




// let current = 0;

// // clear all images

// reset = () => {
// 	for(let i = 0; i < modal.length; i++) {
// 		modal[i].style.display = 'none';
// 	}
// }

// // initialize slider

// startSlide = () => {
// 	reset();
// 	modal[0].style.display = 'block';
// }

// slideLeft = () => {
// 	reset();
// 	modal[current - 1].style.display = 'block';
// 	current--;
// }

// slideRight = () => {
// 	reset();
// 	modal[current + 1].style.display = 'block';
// 	current++;
// }

// changeImageLeft = () => {
// 	console.log(current);
// 	if(current === 0) {
// 		current = modal.length;
// 	}
// 	slideLeft();
// }

// changeImageRight = () => {
// 	console.log(current);
// 	if(current ===modal.length - 1) {
// 		current = -1;
// 	}
// 	slideRight();
// }

