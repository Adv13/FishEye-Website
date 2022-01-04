'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

export default class ImageFactory {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // CREATE ELEMENT IMG WITH SRC, ALT, ROLE
    createHTML(element) {//creation de l'element suivant :
        let eltImage = document.createElement('img');//créer un element image sous "img"
        eltImage.setAttribute('src', element.image);//ajouter l'attribut src à l'element
        eltImage.setAttribute('alt', element.alt);//ajouter l'attribut alt à l'element pour le texte alternatif
        eltImage.setAttribute('role', 'button');////ajouter l'attribut role avec le choix button à l'image
        eltImage.className = 'ph-media';//ajouter la class "ph-media" à l'element video

        return eltImage;//retourner l'element créé
    }
}
