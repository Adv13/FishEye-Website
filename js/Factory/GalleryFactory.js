'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////
/////////////////////////////////////////////
import MediaFactory from './MediaFactory.js';
import Lightbox from '../photographers/LightBox.js';

export default class GalleryFactory {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    constructor() {
        this.totalLike = 0;//met le compteur de likes à 0
    }
    
    // build the gallery with the different medias and the lightbox
    builder(dataMedia) {//récupère les datas concernant les medias pour :
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();//attribuer une nouvelle instance MediaFactory dans une variable du même nom
        let currentMedia = []; //créer un tableau sous currentMedia
        let currentMediaName = [];//créer un tableau sous currentMediaName

        dataMedia.forEach(element => {//dans dataMedia, pour chaque element :
            if (id == element.photographerId) {// si id == l'id du photographe alors:
                let sectionPhWorks = document.getElementById('ph-works');//mettre l'element avec l'id "ph-works" dans une variable
                let articlePhWork = document.createElement("article");//créer un element "article" sous la variable "articlePhWork"
                let mediaHTML = mediaFactory.renderMedia(element);//mettre mediaFactory avec function renderMedia sur element sous une variable
                let workTemplate = `
                <a href='#' title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.photoName}</h2>
                    <span class="ph-work-price">${element.price} €</span>
                    <div class='ph-elt-like'>
                    <span class="ph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                    </div>
                </div>
                `
                articlePhWork.innerHTML = workTemplate;//ajouter le morceau de code ci-dessus au code html de la page
                sectionPhWorks.appendChild(articlePhWork);//ajouter articlePhWork à la sectionPhWork du html de la page
                articlePhWork.classList.add("ph-work-elt");//ajouter la class "ph-work-elt" à articlePhWork
                this.totalLike += parseInt(element.likes);//mettre le compteur de likes à jour avec le nombre de likes présents dans le fichier json
                currentMedia.push(mediaHTML.outerHTML);//pousser de la variable currentMedia les infos medias dans un element et tout ses descendants inclus
                currentMediaName.push(element.photoName);//pousser de la variable currentMediaName les infos medias dans un element et tout ses descendants inclus
                (new Lightbox())//nouvelle instance Lightbox dans laquelle
                .init(currentMedia, currentMediaName)// on initialise les varaibles des medias
            }
        })
        return this;//retourner resultat
    }
}
