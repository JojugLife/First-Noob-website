document.addEventListener('DOMContentLoaded', function () {
    const adresseInput = document.querySelector('.adresse');
    const questionInput = document.querySelector('.question');
    const devQuestionTextarea = document.querySelector('.dev_question');
    const button = document.querySelector('#submitBtn'); // Bouton
    
    // Désactive le bouton par défaut
    button.disabled = true;

    // Fonction pour valider l'adresse mail
    function validateEmail() {
        const email = adresseInput.value; // Récupère la valeur entrée
        if (isValidEmail(email)) {
            adresseInput.classList.remove('error'); // Retire la bordure rouge
            return true;
        } else {
            adresseInput.classList.add('error'); // Ajoute une bordure rouge
            return false;
        }
    }

    // Surveiller les changements dans le champ d'adresse mail
    adresseInput.addEventListener('input', function () {
        if (validateEmail()) {
            button.disabled = false; // Active le bouton si l'email est valide
        } else {
            button.disabled = true; // Désactive le bouton si l'email est invalide
        }
    });

    // Ajoute un événement au clic sur le bouton
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire

        console.log('Valeurs des champs :');
        console.log('Adresse Mail:', adresseInput.value);
        console.log('Question:', questionInput.value);
        console.log('Développe ta question:', devQuestionTextarea.value);
    });
});

// Fonction qui valide le format de l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); // Retourne true si valide
}


