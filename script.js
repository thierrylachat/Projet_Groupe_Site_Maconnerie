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


// AOS
document.getElementById('img1').setAttribute('data-aos','zoom-in');
document.getElementById('img2').setAttribute('data-aos','zoom-in');
document.getElementById('img3').setAttribute('data-aos','zoom-in');
document.getElementById('img4').setAttribute('data-aos','zoom-in');
document.getElementById('img5').setAttribute('data-aos','zoom-in');
// AOS
<<<<<<< HEAD
// document.getElementById('img1').setAttribute('data-aos') = 'zoom-in';
// document.getElementById('img1').style.borderColor = "red"
=======

document.getElementById('img1').setAttribute('data-aos','zoom-in');
>>>>>>> 3a8ca67427dbe67d038e29e90577abff45312bc3
