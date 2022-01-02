'use strict';
/////////////////////////////////////////

import GalleryFactory from '../Factory/GalleryFactory.js';

export default class DropDownMenu {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // Events, open/close the dropDownMenu
    dropDown(data) {//appliquer dropdown aux datas soit
        let arrowOpen = document.getElementsByClassName('sort-btn');//attribuer la class "sort-btn" à la variable "arrowOpen"
        let arrowClose = document.getElementsByClassName('arrow-up-close');//attribuer la class "arrow-up-close" à la variable "arrowClose"
        let hiddenSort = document.getElementsByClassName('hidden-sort');//attribuer la class "hidden-sort" à la variable "hiddenSort"

        if (arrowOpen) {//si 
            arrowOpen[0].addEventListener('click', () => {//on clique sur l'element comprenant le "sort-btn" alors
                hiddenSort[0].style.display = 'block';//afficher le block ul hiddenSort
            });
            this.sortMedias(data);//appliquer sortMedias aux datas
        }
        if (arrowClose) {//si
            arrowClose[0].addEventListener('click', () => {//on clique sur l'element avec le "arrow-up-close" alors
                hiddenSort[0].style.display = "none";//ne pas afficher le block hiddenSort
            });
        }
    }

    // SORT MEDIAS (POPULARITY, DATA, TITLE)
    sortMedias(data) {//appliquer sortMedias sur les datas, soit
        let mediaArraySort = [];//créer un tableau
        let media = data.media;//attribuer les data.media dans une variable media
        let btnSort = document.querySelector('.sort-btn');//attribuer "sort-btn" dans la variable "btnSort"
        let hiddenSort = document.getElementsByClassName('hidden-sort');//mettre les elements avec la class "hidden-sort" dans la variable hiddenSort
        let sortBtn = Array.from(document.getElementsByClassName('sort'));//mettre les elements avec la class "sort" dans l'ordre dans la variable

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {//pour chaque element dans la variable sortBtn :
            hiddenSort[0].style.display = "none";//ne pas afficher le block hiddenSort
            if (index == 0) {//si index == 0 alors
                btnSort.innerHTML = `Popularité`;//sélectionner le li de l'ul avec le tag "Popularité"

                mediaArraySort = media.sort((a, b) => { // SORT BY POPULARITY  
                    return b.likes - a.likes //du plus populaire au moins populaire
                })

            } else if (index == 1) {//si index == 1 alors
                btnSort.innerHTML = `Date`;//sélectionner le li de l'ul avec le tag "Date"

                mediaArraySort = media.sort((a, b) => { // SORT BY DATE 
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();//plus récent au plus ancien
                })

            } else if (index == 2) {//si index == 2 alors
                btnSort.innerHTML = `Titre`;//sélectionner le li de l'ul avec le tag "Titre"

                mediaArraySort = media.sort((a, b) => { // SORT BY TITLE
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {//si le nom (mis en lowercase) dans a est inférieur au nom (mis en lowercase) en b
                        return -1; //retourner -1
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {//si le nom (mis en lowercase) dans a est supérieur au nom (mis en lowercase) en b
                        return 1;//retourner 1
                    }
                })
            }
            this.displaySortMedia(mediaArraySort);//appliquer displaySortMedia au tableau mediaArraySort
        }));
    }

    displaySortMedia(mediaArraySort) {
        // DISPLAY PHOTOGRAPHERS WORKS WITH SORT
        document.getElementById("ph-works").innerHTML = "";//appliquer les lignes au code html sous ph-works
        new GalleryFactory().builder(mediaArraySort);//instancier nouvelle gallery basé sur le tableau dans mediaArraySort
    }
}