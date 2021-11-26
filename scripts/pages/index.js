    
    
    
    
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = [
            var requestURL = 'https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye/blob/main/data/photographers.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function(){
                if(request.status >=200 && request.status < 400){
                    //success
                    var data = request.response;
                    getPhotographers(data);
                }else{
                    //error
                    console.error();
                }
            };
            request.onerror = () => {
                //msg error
                console.error();
            }
        ]
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    