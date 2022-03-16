
/*
** Fonction pour gestion de l'affichage du menu en mode mobile
*/

const navToggle = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})


/*
** Definition des Objects "membre de l'équipe"
*/

const membreEquipe = {
    membre01 : {
        photo: "url?",
        nom: "Carl",
        prenom: "Basile",
        poste: "Product Owner",
        complement: "Je sais pas qui mettre"
    },
    membre02 : {
        photo: "url?",
        nom: "Belala",
        prenom: "Ali",
        poste: "---",
        complement: "Je sais pas qui mettre"
    },
    membre03 : {
        photo: "url?",
        nom: "Feroussier",
        prenom: "Stéphane",
        poste: "---",
        complement: "Je sais pas qui mettre"
    },
    membre04 : {
        photo: "url?",
        nom: "Puigrenier",
        prenom: "Sébastien",
        poste: "GitHub",
        complement: "Je sais pas qui mettre"
    },
}
