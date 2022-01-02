'use strict';
/////////////////////////////////////////

export default class VideoFactory {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // CREATE ELEMENT VIDEO WITH CONTROLS, SRC, ROLE
    createHTML(element) {//creation de l'element suivant :
        let eltVideo = document.createElement('video');//créer un element video
        eltVideo.setAttribute("controls", "controls")// ajouter l'attribut controls pour l'affichage/lecture de la video
        eltVideo.setAttribute('src', element.video);//ajouter l'attribut src à la video
        eltVideo.setAttribute('role', 'button');//ajouter l'attribut role avec le choix button à la video
        eltVideo.className = 'ph-media';//ajouter la class "ph-media" à l'element video

        return eltVideo;//retourner l'element créé
    }
}
