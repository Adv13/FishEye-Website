'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

export default class LightBox {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    constructor() {
        this.currentIndex = 0;//index actuel à 0
    }

    // initialize the lightbox when clicking on a media, call the functions allowing to navigate in the lightbox
    init(currentMedia, currentMediaName) {
        let getMedias = Array.from(document.getElementsByClassName('ph-media'));//elements with class name 'ph-media'dans variable getMedias
        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {//pour chaque medias si clic souris
            let lightBoxMedia = document.getElementById('works-lightbox-media');//element with id 'works-lightbox-media' dans variable
            let lightBoxName = document.getElementById('works-lightbox-name');//element with id 'works-lightbox-name' dans variable
            let src = currentMedia[index];//index of currentMedia dans variable
            let nameSrc = currentMediaName[index];//index of currentMediaName dans variable
            this.currentIndex = index;//index devient currentIndex

            document.getElementById('works-lightbox').style.display = 'block';//element with id 'works-lightbox' affiché
            lightBoxMedia.innerHTML = `${src}`;//ajout ligne html avec src du dessus
            lightBoxName.innerHTML = `${nameSrc}`;//ajout ligne html avec nameSrc du dessus
        }))
        this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName);//attribuer function previous à la flèche de guache avec currentMedia + name
        this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName);//attribuer function previous à la flèche de droite avec currentMedia + name
        this.close();//fermer
        this.keyboard(currentMedia, currentMediaName);//naviguer avec ketboard à gauche et droite
        return this
    }

    // return to previous media
    previous(elt, media, name) {//function previous avec parameters
        elt.addEventListener('click', () => {//lorsque clic souris
            this.currentIndex -= 1;//-1 dans l'index
            let lightBoxMedia = document.getElementById('works-lightbox-media');//element with id 'works-lightbox-media' dans variable
            let lightBoxName = document.getElementById('works-lightbox-name');//element with id 'works-lightbox-name' dans variable

            if (this.currentIndex < 0) {//si index actuel inférieur à 0 alors
                this.currentIndex = media.length - 1;//déplacement de -1 dans l'index pour le media
                this.currentIndex = name.length - 1;//déplacement de -1 dans l'index pour le nom
            }

            let src = media[this.currentIndex];//donner currentMedia à src
            let nameSrc = name[this.currentIndex];//donner currentMedia name à nameSrc

            lightBoxMedia.innerHTML = `${src}`;//ajout ligne html avec src du dessus
            lightBoxName.innerHTML = `${nameSrc}`;//ajout ligne html avec nameSrc du dessus
        })
    }

    // turn to the next media, même qu'au dessus mais pour la droite
    next(elt, media, name) {//function previous avec parameters
        elt.addEventListener('click', () => {//lorsque clic souris
            this.currentIndex += 1;;//+1 dans l'index
            let lightBoxMedia = document.getElementById('works-lightbox-media');//element with id 'works-lightbox-media' dans variable
            let lightBoxName = document.getElementById('works-lightbox-name');//element with id 'works-lightbox-name' dans variable

            if (this.currentIndex > name.length - 1) {//si currentIndex a sa position dans le array qui est supérieur à la taille du array -1
                this.currentIndex = 0;//alors currentIndex = 0
            }

            let src = media[this.currentIndex];//attribuer infos media du currentIndex dans src
            let nameSrc = name[this.currentIndex];//attribuer nom du currentIndex dans nameSrc

            lightBoxMedia.innerHTML = `${src}`;//rajouter code html avec le src maj
            lightBoxName.innerHTML = `${nameSrc}`;//rajouter code html avec nomSrc maj
        })
    }

    close() {//fermer lightbox lorsqu'on clique sur la croix de la fenetre
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {//si clic souris alors
            let lightbox = document.getElementById('works-lightbox');//mettre id "works-lightbox" dans variable

            lightbox.style.display = 'none';//ne pas afficher la variable
        })
    }

    keyboard(currentMedia, currentMediaName) {//navigation à gauche et à droite avec le clavier, pareil que au dessus
        document.addEventListener('keydown', (key) => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            // ESCAPE TO CLOSE
            if (key.code == "Escape") {//fermer lightbox si on appyue sur la touche escape
                let lightBox = document.getElementById('works-lightbox');//mettre id "works-lightbox" dans variable
                lightBox.style.display = 'none';//ne pas afficher la variable
            }

            else if (key.code == "Space") {//fermer lightbox si on appyue sur la touche escape
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'block';//ne pas afficher la variable

                //la position de currentIndex

                if (this.currentIndex == currentMediaName.length) {//si currentIndex a sa position dans le array qui est égale à la taille du array
                    this.currentIndex = 0;
                    
                }

                let src = currentMedia[this.currentIndex];//attribuer infos media du currentIndex dans src
                let nameSrc = currentMediaName[this.currentIndex];//attribuer nom du currentIndex dans nameSrc

                lightBoxMedia.innerHTML = `${src}`;//rajouter code html avec le src maj
                lightBoxName.innerHTML = `${nameSrc}`;//rajouter code html avec nomSrc maj

                
            }

            // ARROW RIGHT TO STEP RIGHT
            else if (key.code == "ArrowRight") {//si la touche activée correspond à la touche flèche droite du clavier
                this.currentIndex += 1;//ajouter +1 à la position de currentIndex

                if (this.currentIndex > currentMediaName.length - 1) {//si currentIndex a sa position dans le array qui est supérieur à la taille du array -1
                    this.currentIndex = 0;//alors currentIndex = 0
                }

                let src = currentMedia[this.currentIndex];//attribuer infos media du currentIndex dans src
                let nameSrc = currentMediaName[this.currentIndex];//attribuer nom du currentIndex dans nameSrc

                lightBoxMedia.innerHTML = `${src}`;//rajouter code html avec le src maj
                lightBoxName.innerHTML = `${nameSrc}`;//rajouter code html avec nomSrc maj
            }

            // ARROW LEFT TO STEP LEFT
            else if (key.code == "ArrowLeft") {//si la touche activée correspond à la touche flèche gauche du clavier
                this.currentIndex -= 1;// -1 à la position de currentIndex

                if (this.currentIndex < 0) {//si currentIndex est inférieur à 0 alors
                    this.currentIndex = currentMedia.length - 1;//reculer de -1 dans l'array currentMedia
                    this.currentIndex = currentMediaName.length - 1;//reculer de -1 dans l'array currentMediaName
                }

                let src = currentMedia[this.currentIndex];//attribuer infos media du currentIndex dans src
                let nameSrc = currentMediaName[this.currentIndex];//attribuer nom du currentIndex dans nameSrc

                lightBoxMedia.innerHTML = `${src}`;//rajouter code html avec le src maj
                lightBoxName.innerHTML = `${nameSrc}`;//rajouter code html avec nomSrc maj
            }
        });
    }
}
