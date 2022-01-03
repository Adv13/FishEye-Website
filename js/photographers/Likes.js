'use strict';// code ci-dessous exécuté de manière stricte pour ne pas utiliser de variables non déclarées pour éviter certaines erreurs
/////////////////////////////////////////

export default class LikeSubscriber {// export default permet d'exporter une class, variable et/ou fonction en dehors du fichier avec le même nom
    // add or remove a 'like' when clicking on the 'like' icon   
    constructor() {
        let media = document.getElementById('ph-works');//mettre l'element avec l'id "ph-works" dans une variable media

        media.addEventListener('click', (e) => {//au clic souris sur medias
            let classListTarget = typeof e.target.classList === 'undefined' ? [] : e.target.classList.value.split(' ');//si le type de la cible est strictement undifined alors le mettre dans variable "classListTarget"
            let hasClassBtn = -1 != classListTarget.indexOf('heart-btn');//si result of classListTarget est différent de -1 car 'heart-btn' pas trouvé dans le tableau alors mettre dans variable

            if (hasClassBtn) {//si
                let totalLikes = parseInt(document.getElementById('total-likes').innerHTML);//s'assurer que l'element avec l'id soit un integer et regarder son balisage html
                let counterLike = e.target.parentNode.firstElementChild.firstElementChild;//mettre le premier child de target dans une variable
                let likeValue = parseInt(counterLike.innerHTML);//s'assurer que l'element avec l'id soit un integer et regarder son balisage html
                let isLiked = -1 != classListTarget.indexOf('isLiked');//si result of classListTarget est différent de -1 car 'isLiked' pas trouvé dans le tableau alors mettre dans variable

                document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes;//dans l'element avec l'id 'total-likes' regarder si le balisage html a un isLiked et décrémenter ou incrémenter selon ca
                counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;//regarder si le balisage html a un isLiked et décrémenter ou incrémenter selon ca

                if (isLiked) {//si isLiked not true
                    e.target.classList.remove('isLiked');//supprimer isLiked
                    e.target.classList.replace('fas', 'far');//remplacer icone fas par far
                } else {//sinon
                    e.target.classList.add('isLiked');//ajouter isLiked
                    e.target.classList.replace('far', 'fas');//remplacer icone far par fas
                }
            }
        })
    }
}
