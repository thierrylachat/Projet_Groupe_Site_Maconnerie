const button = document.createElement("button");
button.classList.add("btn");
button.classList.add("btn-success");
button.classList.add("mt-5");
button.type = "submit";
button.textContent="Envoyer";
button.id = "btn";
document.querySelector('form').appendChild(button);

// AOS

document.getElementById('img1').setAttribute('data-aos','zoom-in');
// document.getElementById('img1').style.borderColor = ""