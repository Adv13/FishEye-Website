var requestURL = '../data/photographers.json'
export const getData = () =>
fetch(requestURL)
    .then((response) => response.json())
    .catch((error) => {
        console.error("Une erreur est survenue pendant l'accès aux données.");
        console.error(error);
    });

