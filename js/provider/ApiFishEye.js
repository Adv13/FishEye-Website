'use strict'; // code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

// GET THE DATA FISH (PHOTOGRAPHERS & MEDIAS)
export default class ApiFishEye { // export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    async getDataFishEye() {
        let url = 'Api/FishEye/photographers.json';// attribuer le path du file à la variable "url"
        let response = await fetch(url); // attribuer le résultat de la promise à response si url ok
        let data = await response.json(); // attribuer le résultat de la promise à data en format json si response ok

        const dataPhotographers = [...data.photographers]; //création de la variable dataPhotographers dans laquelle on stock dans un tableau les données des photographes
        const dataMedias = [...data.media]; //création de la variable dataMedias dans laquelle on stock dans un tableau les données des médias (img/vidéo) des photographes

        return { // retourner : 
            'photographers': dataPhotographers, //les données présentent dans la partie "photographers" du table
            'media': dataMedias //les données présentent dans la partie "media" du table 
        };
    }
}