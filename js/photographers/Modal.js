'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

export default class Modal {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // Events, launch/close the modal by clicking on the 'contact me' button
    modal(data) {//appliquer modal sur data
        let modalBtn = document.getElementById("ph-contact");//mettre l'element avec l'id "ph-contact" dans une variable
        let closeBtn = document.getElementsByClassName('close-form-icon');//mettre l'element avec la class "close-form-icon" dans une variable

        if (modalBtn) {//si
            modalBtn.addEventListener('click', this.launchModal);//si il y a un clic sur le modalBtn, lancer le modal
            this.formPhName(data);//appliquer le form aux datas concernées
        }
        if (closeBtn) {//si
            closeBtn[0].addEventListener('click', this.closeModal);// il y a un clic sur le closeBtn, fermer le modal
        }
    }

    // LAUNCH MODAL
    launchModal() {
        let modalbg = document.getElementById("form-dialog");//mettre element avec id "form-dialog" dans une variable

        modalbg.style.display = 'block';//afficher le block du form à la variable
    }

    // CLOSE MODAL
    closeModal() {
        let modalbg = document.getElementById("form-dialog");//mettre element avec id "form-dialog" dans une variable

        modalbg.style.display = 'none';//ne pas afficher le block du form à la variable
    }

    // DISPLAY PH NAMES IN FORM
    formPhName(data) {//function pour le form avec les datas
        let id = window.location.search.split('id=')[1];//sélectionner l'id du photographe dans les datas
        let photographers = !id ? data : data.filter(photographer => photographer.id == id);//vérifier qu'on a bien l'id du photographe concerné et filtrer en conséquence
        let phName = document.getElementById('ph-form-name');//mettre element avec id "ph-form-name" dans une variable
        let phNameTemplate = `${photographers[0].name}`//mettre le nom du photographe qu'on veut contacter dans le form dans une variable
        phName.innerHTML = phNameTemplate;//afficher le nom du photographe qu'on veut contacter dans le form
    }
}
