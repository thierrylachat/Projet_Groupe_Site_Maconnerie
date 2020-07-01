// Ajout du bouton sur le formalaire.

var contactForm = document.querySelector('form');
const button = document.createElement("button");
button.classList.add("btn");
button.classList.add("btn-success");
button.classList.add("mt-5");
button.type = "submit";
button.name = "submited";
button.textContent="Envoyer";
button.id = "btn";

if (contactForm) {
    contactForm.appendChild(button);
}


// Ajout des animations AOS.



// document.querySelector('ul').insertAdjacentElement('afterend', form);
contactForm.addEventListener("submit",function(e){
    // supprimer levenement par defaut
    e.preventDefault();
    // recuperer le contenue des formulaire sous forme de donnée de formulaire 
    let data = new FormData(this);
    // l'objet fetch permer de faire des requete a syncrone 
    fetch("?page=4",{ // la page de traitement de la requette 
        method: 'POST', // la methode http 
        body: data  // les donnée envoyer dans la requete 
    }).then((response)=> response.json()) // la reponse du serveur (l'échange s'est bien passée)
    .then(data => { // on verifie les donnée reçus 
    let errors = document.querySelectorAll('.errors');
    cleanForm(errors);
        for(item in data){ // on traite les données 
            // console.log(item);
            // console.log(data[item]);
            let p = document.createElement('p'); // on crée le p pour affficher les messages d'erreurs
            p.classList.add("errors"); // on ajoute une classe errors 
            p.textContent = data[item]; // on ajoute la valeur du json dans le p 
            document.querySelector(`input[name="${item}"]`).insertAdjacentElement('afterend',p); // on sélectionne le input qui a le nom correspondant a la clé du json et on insert apres le p 
        }
    })
});
function cleanForm(array){
    let form = document.querySelector('form');
    if (array){
        array.forEach(item => {
            form.removeChild(item);
        })
    }
}
//AOS
document.getElementById('img1').setAttribute('data-aos','zoom-in');
document.getElementById('img2').setAttribute('data-aos','zoom-in');
document.getElementById('img3').setAttribute('data-aos','zoom-in');
document.getElementById('img4').setAttribute('data-aos','zoom-in');
document.getElementById('img5').setAttribute('data-aos','zoom-in');

 