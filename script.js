/*
** Index des fonctions :
** Toogle() => gestion de l'affichage de la navbar
** generateNavBar()
** generateFooter()
** generateStaffMembers() pour la page equipe.html
** generatePage() a appeler sur chaque page pour générer navbar, footer et toogle
**
*/


/*
** Fonction pour gestion de l'affichage du menu en mode mobile
*/
const Toogle = () => {
    const navToggle = document.querySelector('.nav-btn');
    const nav = document.querySelector('.nav__list');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav--visible');
    })
}


/*
** génération de la navbar
*/
const generateNavBar = () => {
    document.querySelector(".nav-menu").innerHTML = `
    <div>
        <button class="nav-btn" aria-label="open navigation">
            <span class="hamburger"></span>
        </button>
    
        <a href="./index.html">
            <img src="./img/logo_outsiders.png" alt="logo {Ou}Siders" class="nav-logo">
        </a>
    </div>
    
    <ul class="nav__list">
        <li><a href="./index.html">Accueil</a></li>
        <li><a href="./apropos.html">A propos</a></li>
        <li><a href="./equipe.html">L'équipe</a></li>
    </ul>`
}


/*
** génération du footer
*/
const generateFooter = () => {
    document.querySelector("footer").innerHTML = `
    <div class="credit">
        <a href="./profilmembre.html"><p>Liens vers page de profil</p></a>
    </div>`
}


/*
** Fonction de génération de la page Equipe en fonction du tableau membreEquipe[]
*/
const generateStaffMembers = () => {
let membreEquipe = []

fetch("./assets/equipe.json")
.then((resp) => resp.json())
.then(function(data) {
    membreEquipe = data;

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
        console.log(membreEquipe[i].photo)
        divImg.style.backgroundImage = "url(" + membreEquipe[i].photo + ")";
        divImg.style.backgroundSize = "cover";
        divImg.style.backgroundPosition = "center";
        divContainer.appendChild(divImg);

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

    }

})
.catch(function(error) {
  console.log(error);
});

}


/*
** Fonction permettant de générer les parties communes à l'ensembe des pages
** Navbar
** Footer
*/
const generatePage = () => {
    generateNavBar();
    generateFooter();
    Toogle();
}


/*
**
*/


const element = document.querySelector(".S-FEROUSSIER");
element.addEventListener("click", generateCard);

function generateCard() {


        fetch("./assets/membres.json")
        .then((resp) => resp.json())
        .then(function(data) {
            membreOutsiders = data;
            for (let i = 0; i < membreOutsiders.length; i++){
                if (element.className.split(' ')[0] === membreOutsiders[i].id){
                    
                    let memberLastName = membreOutsiders[i].nom[0].toUpperCase() + membreOutsiders[i].nom.slice(1).toLowerCase();
                    let memberFirstName = membreOutsiders[i].prenom[0].toUpperCase() + membreOutsiders[i].prenom.slice(1).toLowerCase();
                    let generatedHtml = `
            <div class="carousel"> 
              <input type="radio" name="position" />
              <input type="radio" name="position" checked />
              <input type="radio" name="position" />
                <main id="carousel">
                    <!-- première carte-->
                    <div class="item">
                      <div class="descriptif">
                      <p>${membreOutsiders[i].hobbys}</p>
                      <p>${membreOutsiders[i].why}</p>
                      </div> 
                    </div>
                    
                    <!-- deuxième carte -->
                    <div class="item">
                      <div class="profil-container">
                      <div class="photo-profil">
                      <img src="${membreOutsiders[i].photo}" alt="" srcset="">
                    </div >
                      </div>
                      <div class="main-profil">
                        <div class="descriptif">
                          <h1>${memberLastName}  <span>${memberFirstName}</span></h1> 
                        </div> 
                      </div>
                    </div>
                    
                    <!-- troisième carte-->
                    <div class="item">
                      <div class="main-profil">
                        <div> 
                          <div>
                            <a href="${membreOutsiders[i].github}"><img src="./img/github-brands.svg" alt="" srcset=""></a>
                          </div>
                          <div>
                            <a href="${membreOutsiders[i].linkedin}"><i class="fa-brands fa-linkedin"></i></a>
                          </div>
                        <div>
                          <a href="${membreOutsiders[i].email}"><i class="fas fa-envelope"></i></i></a>
                        </div>
                          <div>
                            <a href="./index.html"><i class="fa-solid fa-arrow-rotate-left"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </main>
                    </div>
                    `;
const newpage = document.querySelector("main").innerHTML = generatedHtml;
                }

            }

        })
        .catch(function(error) {
        console.log(error);
        });
}