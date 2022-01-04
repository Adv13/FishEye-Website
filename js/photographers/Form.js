'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

export default class Form {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    fields() {
        // DOM ELEMENTS FORM FIELDS VALIDATION
        let form = document.getElementById('contact-form');//element with id 'contact-form' dans variable
        let firstName = document.getElementById('first-name');//element with id 'first-name' dans variable
        let lastName = document.getElementById('last-name');//element with id 'last-name' dans variable
        let email = document.getElementById('email');//element with id 'email' dans variable
        let message = document.getElementById('message');//element with id 'message' dans variable
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;//regex pour contrainte de caractères nom+prénom

        // SEND FORM
        form.addEventListener('submit', (e) => {//lorsque le form est submit
            e.preventDefault();//suspendre envoi pour vérifier si
            let isValid = this.checkNames(firstName, regex) &&//prénom+nom+email+message ok
                this.checkNames(lastName, regex) &&
                this.checkEmail(email) &&
                this.checkMessage(message);

            if (isValid) {// si valide alors
                firstName.style.border = 'none';//ne pas afficher de borders
                lastName.style.border = 'none';//ne pas afficher de borders
                email.style.border = 'none';//ne pas afficher de borders
                message.style.border = 'none';//ne pas afficher de borders
                this.consoleMessageValid(firstName, lastName, email, message);
                document.getElementById('contact-form').reset();//reset le form ensuite
            } else {
                this.errorVerification(firstName, lastName, email, message, regex);//afficher message d'erreur
            }
        });
    }

    consoleMessageValid(firstName, lastName, email, message) {//si contraintes respectées alors 
        console.group('Contact Message');//regrouper les infos si dessous sous "contact message" dans la console
        console.log('Prénom : ' + firstName.value);
        console.log('Nom : ' + lastName.value);
        console.log('Email : ' + email.value);
        console.log('Message : ' + message.value);
        console.groupEnd();
    }

    errorVerification(firstName, lastName, email, message, regex) {//vérrifer si contraintes respectées
        this.checkNames(firstName, regex);
        this.checkNames(lastName, regex);
        this.checkEmail(email);
        this.checkMessage(message);
    }

    // Check FirstName and LastName
    checkNames(elt, regex) {
        if (elt.value.trim().length < 2 || elt.value.trim() === "" || !elt.value.match(regex)) {//si value empty et grandeur inférieure à 2 ou value empty ou value ne match pas regex alors
            elt.parentElement.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
            elt.style.border = '2px solid #e54858';//border de 2px solid rouge autour de la case
            return false;//retourner faux
        } else {//sinon 
            elt.parentElement.setAttribute('data-error-visible', 'false');//ne pas afficher message d'erreur
            elt.style.border = 'solid #279e7a 0.19rem';//border solide vert autour de la case
            return true;//retourner vrai
        }
    }

    checkEmail(elt) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (elt.value.trim().match(re)) {//si format email respecté alors
            elt.parentElement.setAttribute('data-error-visible', 'false');//ne pas afficher message d'erreur
            elt.style.border = 'solid #279e7a 0.19rem';//border solide vert autour de la case
            return true;
        }
        elt.parentElement.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
        elt.style.border = '2px solid #e54858';//border de 2px solid rouge autour de la case
        return false;
    }

    checkMessage(elt) {
        if (elt.value.trim() === '' || elt.value.trim() == null) {//si message avec espace solo ou empty alors
            elt.parentElement.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
            elt.style.border = '2px solid #e54858';//border de 2px solid rouge autour de la case
            return false;
        }
        elt.parentElement.setAttribute('data-error-visible', 'false');//ne pas afficher message d'erreur
        elt.style.border = 'solid #279e7a 0.19rem';//border solide vert autour de la case
        return true;
    }
}
