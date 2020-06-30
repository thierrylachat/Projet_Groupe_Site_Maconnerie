const button = document.createElement("button");
button.classList.add("btn");
button.classList.add("btn-success");
button.classList.add("mt-5");
button.type = "submit";
button.textContent="Envoyer";
button.id = "btn";
let form = document.querySelector('form');
if (form) {
    document.querySelector('form').appendChild(button);
}

