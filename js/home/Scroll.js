'use strict';
/////////////////////////////////////////

export default class Scroll {
    // Retrieve the user's position, to bring them back to the top of the page
    scrollButton() {
        window.addEventListener("scroll", () => { // si scrolling event appears :
            let button = document.getElementById("main-photographers-link");//dans la variable button, mettre l'element avec l'ID main-photographers-link 
            let y = window.scrollY;// dans la variable y mettre :
            //The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.
            if (y >= 130) {// si y supérieur ou égal à 130 alors
                button.style.display = "block"; //afficher le button
            } else { //sinon
                button.style.display = "none";//ne pas afficher le button
            }
        });
    }
}
