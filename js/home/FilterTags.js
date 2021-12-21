'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

// FUNCTION FILTER TAGS
export default class Filter {
    // FILTER TAGS
    filterTags() {
        let filtres = document.querySelector('ul'); // attribuer dans la variable filtres les tableaux via la balise "ul"
        let articles = document.querySelectorAll('.articlePh');//attribuer dans la variable articles les éléments avec la class articlePh

        // EVENT LISTENER ON CLICK LI
        filtres.addEventListener('click', event => { // au clic souris sur un filtre
            let classValue = event.target.classList.value;//dans la variable classValue, on met la valeur de la cible targetée au clic souris
            // The indexOf() method returns the position of the first occurrence of a specified value in a string
            // The indexOf() method returns -1 if the value is not found. The indexOf() method is case sensitive.
            if (-1 === classValue.indexOf('actived')) {// si value actived dans classValue pas trouvée alors
                event.target.classList.add('actived') // ajouter "actived"
            } else { //sinon
                event.target.classList.remove('actived') //supprimer "actived"
            }

            this.sortDomArticle(articles); // retourner les articles correspondants
        });
    }

    // retrieve the filters with the 'actived' class and place them in the 'filterSelected' array    
    getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');// attribuer dans la variable currentFilters les élément de ul li qui sont activés
        let filterSelected = []; // créer un tablea des filtres sélectionnés

        currentFilters.forEach(function (currentFilter) { // pour chaque filter dans currentFilters
            filterSelected.push(currentFilter.getAttribute("data-filter")); //The push() method adds one or more elements to the end of an array and returns the new length of the array. Ici on prend les filters actuels et on les met en avant en récupérant la class "data-filter"
        });

        return filterSelected;
    }

    // compare/check if 'filters' has the same value as the 'article' class    
    ownAllFilters(article) {
        let filters = this.getActiveFilters(); // mettre filterSelected dans la variable filters
        let classValue = article.classList.value; //classList property is used to return the class attribute present in a particular element. 
        let classes = classValue.split(' '); // dans la variable classes, les values sont séparées par un espace
        let intersection = filters.filter(//dans la variable intersection, on met les class des différents filters actifs
            x => classes.includes(x)
        );

        return filters.length == intersection.length;//vérifie que filters et intersection font la même taille
    }

    // SHOW OR HIDE ARTICLES
    sortDomArticle(articles) {
        articles.forEach((article) => {//pour chaque article
            if (this.ownAllFilters(article)) {//si article values = onwAllFilters values alors
                article.style.display = 'block'; // afficher le bloc
            } else {
                article.style.display = 'none';//sinon, ne pas afficher
            }
        });
    }
}