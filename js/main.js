'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
//////////////////////////////////////////////

// DATA
import ApiFishEye from './provider/ApiFishEye.js';

// HOMEPAGE
import HomePageBuilder from './home/HomePageBuilder.js';

// PH PAGES
import PhotographerProfil from './photographers/PhotographerProfil.js';
import DropDownMenu from './photographers/DropDownSort.js';
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch() { // function pour dispatacher les données sur la page web
    new ApiFishEye().getDataFishEye().then((data) => { //afficher nouvel object de la class ApiFishEye et récupérer les données
        if (window.location.pathname.includes("/photographers.html")) {//sil'url includes /photographers.html alors
            //PHOTOGRAPHER PROFIL HEADER
            new PhotographerProfil().displayPhotographerProfil(data); //afficher nouvel object with les données du photographe concerné

            //DROPDOWN MENU
            new DropDownMenu().dropDown(data);

            //PHOTOGRAPHER GALLERY & LIKES BOX
             new MediaBuilder().photographersMedias(data);
            return
        }
        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers(data);//sinon, afficher un nouvel object home page avec les données des photographes
    }).catch((err) => {
        console.error('Failed to load ApiFishEye ' + err.message); // si problème de chargement des données, afficher msg d'erreur dans console
    })
})();