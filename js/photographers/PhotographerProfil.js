'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

import Modal from './Modal.js';
import Form from './Form.js';

export default class PhotographerProfil {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
    displayPhotographerProfil(data) {//appliquer la function aux data
        let photographersData = data.photographers;//mettre photographers data dans une variable
        const id = window.location.search.split('id=')[1]; //mettre l'id dans une variable
        const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);//vérifier qu'on a bien l'id du photographe concerné et filtrer en conséquence
        const sectionPhotographerProfil = document.getElementById('ph-profil-header');//mettre element avec id "ph-profil-header" dans une variable
        const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                    <p >${photographers[0].tags.map(tag => `<a class="ph-tags" href="index.html">#${tag}</a>`).join(" ")}</p>
                </div>
                <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `
        
        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;//mettre morceau de code ci-dessus dans variable pour le mettre dans le html de la page
        new Modal().modal(photographersData);//instancier nouvelle modal appliquée aux données du photographe
        new Form().fields();//instancier nouveau form et y inclure les informations demandées (nom, email, etc)
        
    }
}
