'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

import GalleryFactory from '../Factory/GalleryFactory.js';
import LikeSubscriber from './Likes.js';

export default class MediaBuilder {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // call the GalleryFactory to create the media section with 'Like' function and the box
    photographersMedias(data) {//appliquer la function aux data
        let media = data.media;//mettre les datas des medias dans une variable
        let gallery = new GalleryFactory().builder(media);//instancier nouvelle gallery avec les données medias dans la variable
        this.boxLikesAndPrice(gallery.totalLike, data.photographers);//appliquer la function qui gère likes et price
        new LikeSubscriber();//instancier neo like
    }

    // creates a box containing the total number of likes and the photographer's price
    boxLikesAndPrice(totalLike, photographers) {//function avec les paramètres totalLike et photographers
        const id = window.location.search.split('id=')[1];//mettre les id dans une variable id

        photographers.forEach(element => {//pour chaque element dans photographers
            if (id == element.id) {//si variable id = element id
                let box = document.getElementById('box');//mettre l'element avec l'id 'box' dans variable
                let boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `
                box.innerHTML = boxTemplate;//ajouter dans box le morceau de code html ci-dessus
            }
        })
    }
}
