'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

import Filter from './FilterTags.js';
import Scroll from './Scroll.js';

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default class HomePageBuilder { // cf comment in ApiFishEye.js
    // Build the photographers section, call the 'filtertags' function and the 'passer au contenu' button
    displayPhotographers(data) {
        let photographers = data.photographers;// attribuer data.photographers à photographers
        photographers.map(photographe => { //The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. Ici, on applique la méthode de photographers à photographe afin de pouvoir:
            let sectionPhotographers = document.getElementById('photographers');//attribuer ID photographers dans le html à la variable sectionPhotographers
            let articlePhotographers = document.createElement('article');//créer un élément article dans le html contenu dans la variable articlePhotographers
            articlePhotographers.className = photographe.tags.join(' ') + ' articlePh';//ajoute les mots contenus dans le paramètre "tags" du file json + articlePh en class aux articles créés
            let templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</ul> 
            `
//ci-dessus, si id=photographers alors attribution d'un bout de code html basé sur les paramètres contenu dans le file json

            sectionPhotographers.appendChild(articlePhotographers);//ajout de articlePhotographers au bloc sectionPhotographers
            articlePhotographers.innerHTML = templatePhotographer;//ajout sous articlePhotographers des lignes html dans la variable templatePhotographer
        })
        new Filter().filterTags();
        new Scroll().scrollButton();
    }
}
