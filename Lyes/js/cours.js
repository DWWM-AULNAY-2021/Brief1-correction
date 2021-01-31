/* cette première instruction indique le lancement 
de la page html d'abord avant de lancer le script*/

/*documentation MDN à consulter*/ 
window.onload = function() {
    var listeApprenant = ['kevin', 'lyes', 'alexis', 'flora', 'assad', 'caroline', 'maellis', 'bamba'];

    var btnRandom = document.getElementById('btn-random');/* déclarer la varible pour lier le boutton 'btn-random' avec la méthode getElementById*/ 
 
    btnRandom.addEventListener('click', function() {
        console.log(listeApprenant);/* console.log(listeApprenant) pour lancer le script dans la console*/ 
    })

} 