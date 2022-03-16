
/*
** Fonction pour gestion de l'affichage du menu en mode mobile
*/

const navToggle = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})


