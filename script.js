
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
        photo: "",
        nom: "Belala",
        prenom: "Ali",
        poste: "---",
        complement: "Ali est en charge de la page de profil des membres."
    },
    membre02 : {
        photo: "",
        nom: "Carl",
        prenom: "Basile",
        poste: "Product Owner",
        complement: "Basile est en charge de la communication avec le client et de la page \"A propos\"."
    },
    membre03 : {
        photo: "",
        nom: "Feroussier",
        prenom: "Stéphane",
        poste: "Grid Master",
        complement: "Stéphane est en charge de l\'index du site."
    },
    membre04 : {
        photo: "",
        nom: "Puigrenier",
        prenom: "Sébastien",
        poste: "GitHub Warrior",
        complement: "Sébastien est en charge du GitHub et de la page équipe."
    },
}
