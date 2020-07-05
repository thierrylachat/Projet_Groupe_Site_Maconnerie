// Ajout du bouton sur le formulaire.

var contactForm = document.querySelector('form');
const button = document.createElement("button");
button.classList.add("btn");
button.classList.add("btn-success");
button.classList.add("mt-5");
button.type = "submit";
button.name = "submited";
button.textContent = "Envoyer";
button.id = "btn";

if (contactForm) {
    contactForm.appendChild(button);
}


// document.querySelector('ul').insertAdjacentElement('afterend', form);
contactForm.addEventListener("submit", function (e) {
    // Suppression de l'évènement par défaut.
    e.preventDefault();
    // Récupération du contenu du formulaire sous forme de données de formulaire.
    let data = new FormData(this);
    // l'objet fetch permet de faire des requêtes asyncrones.
    fetch("?page=4", { // la page de traitement de la requête. 
            method: 'POST', // la méthode http.
            body: data // les donnée envoyées dans la requête.
        }).then((response) => response.json()) // la reponse du serveur (l'échange s'est bien passé).
        .then(data => { // on verifie les données reçues.

            let errors = document.querySelectorAll('.errors');
            cleanForm(errors);

            if (data.errors == true) {

                for (item in data) { // on traite les données.
                    let p = document.createElement('p'); // on crée le p pour afficher les messages d'erreurs.
                    p.classList.add("errors"); // on ajoute une class errors.
                    p.textContent = data[item]; // on ajoute la valeur du json dans le p. 
                    document.querySelector(`input[name="${item}"]`).insertAdjacentElement('afterend', p); // on sélectionne le input qui a le nom correspondant a la clé du json et on insert après le p. 
                }
            } else {
                const divMess = document.createElement('div'); // Création de la div pour le message de succès d'envoi du formulaire.
                divMess.className = 'alert alert-success alert-dismissible fade show mt-5';// Ajout de la class bootstrap pour le message.
                divMess.role = 'alert';
                divMess.innerHTML = `<strong>Votre message a bien été envoyé!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>`; // Insertion du button dans la div.

                document.querySelector('form').insertAdjacentElement("afterend", divMess); // Insertion du message a la fin du form.
            }
        })
});

function cleanForm(array) {
    let form = document.querySelector('form');
    if (array) {
        array.forEach(item => {
            form.removeChild(item);
        })
    }
}


// Ajout des animations AOS.
document.getElementById('img1').setAttribute('data-aos', 'zoom-in');
document.getElementById('img2').setAttribute('data-aos', 'zoom-in');
document.getElementById('img3').setAttribute('data-aos', 'zoom-in');
document.getElementById('img4').setAttribute('data-aos', 'zoom-in');
document.getElementById('img5').setAttribute('data-aos', 'zoom-in');