window.onload = function () {
    var listeApprenant = [
        'Flora',
        'Caroline',
        'Maelis',
        'Lobna',
        'Alicia',
    ]

    /** PROBLEME AVEC le declenchement de setTimeout, 
     * erreur dans la console après deux secondes : VM39106:1 Uncaught ReferenceError: Caroline is not defined
    at <anonymous>:1:1
     */
    let btn = document.getElementById("btn");
    let prenom = Math.floor(Math.random() * listeApprenant.length);
    function affichage() {
        setTimeout(btn.innerHTML = listeApprenant[prenom], 2000);
        console.log(listeApprenant[prenom]);
        btn.innerHTML = "prêt !";
    }

    btn.addEventListener('click', affichage);



    /** apparition du contenu */
    var span = document.getElementsByClassName("extend");
    var i;

    for (i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var ul = this.nextElementSibling;
            if (ul.style.display === "block") {
                ul.style.display = "none";
            } else {
                ul.style.display = "block";
            }
        });
    }
}

    
    

