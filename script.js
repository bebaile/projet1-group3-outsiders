
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


/*
** Fonction de génération de la page Equipe en fonction du tableau membreEquipe[]
*/

const membreEquipe = [
    {
        photo: "https://thispersondoesnotexist.com/image",
        nom: "Belala",
        prenom: "Ali",
        poste: "---",
        complement: "Ali est en charge de la page de profil des membres."
    },
    {
        photo: "https://thispersondoesnotexist.com/image",
        nom: "Carl",
        prenom: "Basile",
        poste: "Product Owner",
        complement: "Basile est en charge de la communication avec le client et de la page \"A propos\"."
    },
    {
        photo: "https://thispersondoesnotexist.com/image",
        nom: "Feroussier",
        prenom: "Stéphane",
        poste: "Grid Master",
        complement: "Stéphane est en charge de l\'index du site."
    },
    {
        photo: "https://thispersondoesnotexist.com/image",
        nom: "Puigrenier",
        prenom: "Sébastien",
        poste: "GitHub Warrior",
        complement: "Sébastien est en charge du GitHub et de la page équipe."
    },
]

const generateStaffMembers = () => {
    for (let i=0; i < membreEquipe.length; i++){
        const main = document.querySelector("main");

        const section =  document.createElement("section");
        section.classList.add("membre-staff");
        main.appendChild(section);

        const divContainer = document.createElement("div");
        divContainer.classList.add("flex","equipe-container");
        section.appendChild(divContainer);

        const divImg = document.createElement("div");
        divImg.classList.add("portrait-membre");
        divImg.style.backgroundImage = "url(" + membreEquipe[i].photo + ")";
        divImg.style.backgroundSize = "cover";
        divImg.style.backgroundPosition = "center";
        divContainer.appendChild(divImg);

       /* const portrait = document.createElement("img")
        portrait.src = membreEquipe[i].photo;
        portrait.classList.add("portrait-membre");
        divImg.appendChild(portrait);
        */

        const divDescription = document.createElement("div");
        divDescription.classList.add("description");
        divContainer.appendChild(divDescription);

        const firstNameLastName = document.createElement("H1");
        firstNameLastName.innerHTML = membreEquipe[i].nom + " <span> " + membreEquipe[i].prenom + "<span>";
        divDescription.appendChild(firstNameLastName);

        const posteCard = document.createElement("H2");
        posteCard.innerHTML = membreEquipe[i].poste;
        divDescription.appendChild(posteCard);

        const complementCard = document.createElement("p");
        complementCard.innerHTML = membreEquipe[i].complement;
        divDescription.appendChild(complementCard);

        console.log("function was lauched !")
    }
}
