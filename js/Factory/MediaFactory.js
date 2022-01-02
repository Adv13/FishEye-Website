'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

import ImageFactory from './ImageFactory.js';
import VideoFactory from './VideoFactory.js';

export default class MediaFactory {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // Check if the selected item is an image or a video
    renderMedia(element) {//creation de l'element suivant :
        let factory = null;//attribuer valeur nulle à la variable factory
        if (element.hasOwnProperty('image')) {//si l'element à la propriété "image" alors
            factory = new ImageFactory();// factory devient une nouvelle instance de ImageFactory (ce qui créé un element image)
        } else if (element.hasOwnProperty('video')) {//sinon, si l'element à la propriété "video" alors
            factory = new VideoFactory();// factory devient une nouvelle instance de VideoFactory (ce qui créé un element video)
        }
        return factory.createHTML(element);//retourner factory en créant l'element
    }
}
