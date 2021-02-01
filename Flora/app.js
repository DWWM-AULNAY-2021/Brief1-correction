window.onload = function () {
    /**Tableau de la liste d'apprenant */
    var listeApprenant = [
        'Flora',
        'Caroline',
        'Maelis',
        'Lobna',
        'Alicia',
        'Alexis',
        'David',
        'Jonathan',
        'Farima',
        'Ayoub',
        'Lyes',
        'Gaelle',
        'Muhammad',
        'Abdoulaye',
        'Asad',
        'Fodie',
        'Elyesse',
        'Mohamed',
        'Bamba',
        'Ayoub'
    ]

    /** Random apprenant */
    // let btn = document.getElementById("btn"); // Code Flora
    const btn = document.getElementById("btn"); // Suggestion
    /* Explication 
      Ta constante ne va pas bouger : btn
      Le sous objet 
    */

    function affichage() {
        btn.innerHTML = "Prêt !";
        setTimeout(random, 2000);
    }

    function random() {
        let prenom = Math.floor(Math.random() * listeApprenant.length);
        btn.innerHTML = listeApprenant[prenom];
    }
    btn.addEventListener('click', affichage);



    /** Apparition de la liste */
    var span = document.getElementsByClassName("extend");

    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var ul = this.nextElementSibling;
            if (ul.style.display === "block") {
                ul.style.display = "none";
            } else {
                ul.style.display = "block";
            }
            /* Remarque Jérémy 
             Tu aurais pu mettre ton style display block/none sur une class css 
            */
        });
    }
}

