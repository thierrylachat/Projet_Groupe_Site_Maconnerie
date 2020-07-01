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


// Ajout des animations AOS.


if (contactForm) {
    // document.querySelector('ul').insertAdjacentElement('afterend', form);
    contactForm.addEventListener("submit", function (e) {
        // Suppression de l'évènement par défaut.
        e.preventDefault();
        // Récupération du contenu des formulaires sous forme de données de formulaire. 
        let data = new FormData(this);
        // l'objet fetch permet de faire des requêtes asyncrones.
        fetch("?page=4", { // la page de traitement de la requête.
                method: 'POST', // la methode http 
                body: data // les données envoyées dans la requête.
            }).then((response) => response.json()) // la réponse du serveur (l'échange s'est bien passé).
            .then(data => { // Vérification des données reçues.

                let errors = document.querySelectorAll('.errors');
                cleanForm(errors);

                if (data.errors == true) {

                    for (item in data) { // Traitement des données 
                        let p = document.createElement('p'); // Création du p pour affficher les messages d'erreurs.
                        p.classList.add("errors"); // Ajout d'une class errors.
                        p.textContent = data[item]; // Ajout d'une valeur du json dans le p.
                        document.querySelector(`input[name="${item}"]`).insertAdjacentElement('afterend', p); // Sélection de l'input qui a le nom correspondant a la clé du json et insertion après le p.
                    }
                } else {
                    const divMess = document.createElement('div'); // Création de la div pour le message.
                    divMess.className = 'alert alert-success alert-dismissible fade show mt-5'; // Ajout d'un message d'alerte.
                    divMess.role = 'alert';
                    divMess.innerHTML = `<strong>votre message a bien été envoyé!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>`; // Insertion du button dans la div.

                    document.querySelector('form').insertAdjacentElement("afterend", divMess); // Insertion du message a la fin du formulaire.


                }
            })
    });
}

function cleanForm(array) {
    let form = document.querySelector('form');
    if (array) {
        array.forEach(item => {
            form.removeChild(item);
        })
    }
}


//AOS
var img = document.getElementById('img1');
if (img) {
    document.getElementById('img1').setAttribute('data-aos', 'zoom-in');
    document.getElementById('img2').setAttribute('data-aos', 'zoom-in');
    document.getElementById('img3').setAttribute('data-aos', 'zoom-in');
    document.getElementById('img4').setAttribute('data-aos', 'zoom-in');
    document.getElementById('img5').setAttribute('data-aos', 'zoom-in');
}