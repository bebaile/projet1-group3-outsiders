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
      <p>Made with...</p> 
      <p>V0.9</p>
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
        firstNameLastName.innerHTML = membreEquipe[i].nom + " " + membreEquipe[i].prenom + "";
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


// js pour la page apropos

/*const elementapropos = document.querySelector('.tutor');


elementapropos.addEventListener('mouseover', function() {
  document.querySelector('.our-tutor-card').style.display = 'flex';
});

elementapropos.addEventListener('mouseleave', function() {
  document.querySelector('.our-tutor-card').style.display = 'none';
});*/



const element = document.querySelectorAll(".accueil-photo");


for (i = 0; i < element.length; i++) {
  element[i].addEventListener('click', function (){
  
    let classTest = this.className.split(' ')[0];
        fetch("./assets/membres.json")
        .then((resp) => resp.json())
        .then(function(data) {
            membreOutsiders = data;
            for (let j = 0; j < membreOutsiders.length; j++){
              console.log(membreOutsiders[j].id)
                if (classTest === membreOutsiders[j].id){
                    
                    let memberLastName = membreOutsiders[j].nom[0].toUpperCase() + membreOutsiders[j].nom.slice(1).toLowerCase();
                    let memberFirstName = membreOutsiders[j].prenom[0].toUpperCase() + membreOutsiders[j].prenom.slice(1).toLowerCase();
                    let generatedHtml = `
                    <div class="carousel"> 
                    <input type="radio" name="position" />
                    <input type="radio" name="position" checked/>
                    <input type="radio" name="position" />
                      <main id="carousel">
                            <!-- première carte-->
                          <div class="item">
                            <div class="descriptif">
                              <h2 id="titre2">Hobbies</h2>
                                <p>${membreOutsiders[j].hobbys}</p>
                              <h2 id="titre2">Pourquoi j'ai voulu être développeur web?</h2>
                                <p>${membreOutsiders[j].why}</p>
                            </div> 
                          </div>
                    
                          <!-- deuxième carte -->
                          <div class="item" id="alibelala">
                            <div class="profil-container">
                              <div class="photo-profil">
                                <img src="${membreOutsiders[j].photo}" alt="" srcset="">
                              </div >
                            </div>
                            <div class="main-profil">
                              <div class="descriptif">            
                                <h1 id="identity">${memberLastName}  ${memberFirstName}</h1> 
                              </div> 
                            </div>
                          </div>
                    
                          <!-- troisième carte-->
                          <div class="item">
                            <!-- <div class="main-profil">-->
                               <div class="button">
                               <div> 
                                 <div>
                                   <a href="${membreOutsiders[j].github}" target="_blank"><i class="fa-brands fa-github"></i></a>
                                 </div>
                                 <div>
                                   <a href="${membreOutsiders[j].linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                 </div>
                                 <div>
                                   <a href="mailto:${membreOutsiders[j].email}"><i class="fas fa-envelope"></i></i></a>
                                 </div>
                                 <div>
                                   <a href="./index.html"><i class="fa-solid fa-arrow-rotate-left"></i></a>
                                 </div>
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
})};