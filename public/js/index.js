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

// Project Toggling

let projectGrp1 = document.querySelectorAll('.projectGrp-1');
let projectGrp2 = document.querySelectorAll('.projectGrp-2');
let projectGrp3 = document.querySelectorAll('.projectGrp-3');
let projectsBtn = document.querySelectorAll('.projects__btn');

projectGrp1 = Array.from(projectGrp1);
projectGrp2 = Array.from(projectGrp2);
projectGrp3 = Array.from(projectGrp3);
projectsBtn = Array.from(projectsBtn);

const hideProjects = () => {
    if (window.innerWidth > 1200) {
        projectGrp2.forEach((project) => {
            project.style.display = 'none';
        });
        projectGrp3.forEach((project) => {
            project.style.display = 'none';
        });
    }
};

const toggleProjects = (id) => {
    if (id === 1) {
        projectGrp1.forEach((project) => {
            project.style.display = 'grid';
        });
        projectGrp2.forEach((project) => {
            project.style.display = 'none';
        });
        projectGrp3.forEach((project) => {
            project.style.display = 'none';
        });
    } else if (id === 2) {
        projectGrp1.forEach((project) => {
            project.style.display = 'none';
        });
        projectGrp2.forEach((project) => {
            project.style.display = 'grid';
        });
        projectGrp3.forEach((project) => {
            project.style.display = 'none';
        });
    } else if (id === 3) {
        projectGrp1.forEach((project) => {
            project.style.display = 'none';
        });
        projectGrp2.forEach((project) => {
            project.style.display = 'none';
        });
        projectGrp3.forEach((project) => {
            project.style.display = 'grid';
        });
    }
};

// Project Responsivenes

if (window.innerWidth <= 1200) {
    projectsBtn.forEach((btn) => {
        btn.style.display = 'none';
    });
    projectGrp1.forEach((project) => {
        project.style.display = 'grid';
    });
    projectGrp2.forEach((project) => {
        project.style.display = 'grid';
    });
    projectGrp3.forEach((project) => {
        project.style.display = 'grid';
    });
}
