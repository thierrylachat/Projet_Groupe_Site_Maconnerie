<?php
// Liaison du fichier xml vers un objet php.
$file = simplexml_load_file('source.xml');
$pageId = 0 ;
// Vérification de l'ID et modification de la variable $pageId en fonction du clic sur les liens.
if ((isset($_GET['page']) && ($_GET['page'] == 1))){
    $pageId = 0;
} elseif ((isset($_GET['page']) && ($_GET['page'] == 2))) {
    $pageId = 1;
} elseif ((isset($_GET['page']) && ($_GET['page'] == 3))) {
    $pageId = 2;
} elseif ((isset($_GET['page']) && ($_GET['page'] == 4))) {
    $pageId = 3;
} else {
// Affichage de la page d'accueil dés l'arrivée.
    $pageId = 0;
}
//validation du formulaire
$isSubmitted = false;

if (count($_POST) > 0) {
    $isSubmitted = true;

//declaration des variables

$lastName = '';
$mail = '';
$phone = '';
$subject = '';
$city = '';
$message = '';
$errors = [];

$regexPhone = '/^(+33|0)[1-79][0-9]{8}$/';
$regexNames = '/^[a-zéèîïêëç]+((?:-|\s)[a-zéèéîïêëç]+)?$/i';
$lastName = trim(filter_input(INPUT_POST, 'your-name', FILTER_SANITIZE_STRING));
if (empty($lastName)) {
    $errors['your-name'] = 'Merci de renseigner votre nom.';
} elseif (!preg_match($regexNames, $lastName)) {
    $errors['your-name'] = 'Le format attendu n\'est pas respecté.';
}
$mail = trim(filter_input(INPUT_POST, 'your-email', FILTER_SANITIZE_STRING));
if (empty($mail)) {
    $errors['your-email'] = 'Merci de renseigner correctement votre adresse électronique.';
} elseif (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $errors['your-email'] = 'Le format attendu n\'est pas respecté.';
}
$phone = trim(filter_input(INPUT_POST, 'your-tel-615', FILTER_SANITIZE_STRING));
if (empty($phone)) {
    $errors['your-tel-615'] = 'Merci de renseigner correctement votre numéro de téléphone.';
} elseif (!preg_match($regexPhone, $phone)) {
    $errors['your-tel-615'] = 'Le format attendu n\'est pas respecté.';
}
$subject = trim(filter_input(INPUT_POST, 'your-subject', FILTER_SANITIZE_STRING));
$city = trim(filter_input(INPUT_POST,'your-ville', FILTER_SANITIZE_STRING));
if (empty($city)) {
    $errors['your-ville'] = 'Merci de renseigner votre nom de ville.';
} elseif (!preg_match($regexNames, $city)) {
    $errors['your-ville'] = 'Le format attendu n\'est pas respecté.';
}
$message = trim(filter_input(INPUT_POST,'your-message', FILTER_SANITIZE_STRING));
exit(json_encode($errors));
}

if($isSubmitted && count($errors) == 0): ?>

    <div class="alert alert-success" role alert>
        Votre compte a été créé avec succès <i class="far fa-grin-alt"></i>!!!
    </div>
    <?php endif; 

    ?>



<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-b+jboW/YIpW2ZZYyYdXczKK6igHlnkPNfN9kYAbqYV7rNQ9PKTXlS2D6j1QZIATW" crossorigin="anonymous">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <!-- Affichage du titre en fonction de la page. -->
    <title><?= $file->page[$pageId]->title ?></title>
</head>

<body>
    <!-- Création de la barre de navigation. -->
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="index.php?page=1/Accueil.html"><img class="logo"
                src="assets/img/Logo-Ocordo-Travaux-Nantes.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
            aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <!-- Création des liens de la barre de navigation en fonction des menus du fichier XML. -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <a class="nav-link" href="index.php?page=1/Accueil.html"><?= $file->page[0]->menu ?><span
                            class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php?page=2/Qui_sommes_nous.html"><?= $file->page[1]->menu ?></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                        href="index.php?page=3/Nos_clients_témoignent.html"><?= $file->page[2]->menu ?></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php?page=4/Contact.html"><?= $file->page[3]->menu ?></a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Affichage du contenu de la page en fonction de l'Id de la page. -->
    <?= $file->page[$pageId]->content ?>

    <!-- Liens Bootstrap. -->

    <script src="script.js"></script>
    <!-- AOS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
    </script>
    <script>
        AOS.init();
    </script>
</body>

</html>