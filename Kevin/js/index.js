window.load = function (){
    
    //tableau des apprentants
    var listeApprenant =  ['prenom1','prenom']; 
    
    //donner la valeur btn-random a
    var btRandom = document.getElementById('btn-random'); 
    
    //affiche la valeur de btnRandom 
    console.log(btRandom);

    //si l'on appuie sur le bouton activee listeApprenant
    btnRandom.addEvenListener('click',function(){
        let nombre;
        nombre = Random();
        console.log(listeApprenant[nombre]);
    });




/*
var btn = document.getElementsByClassName('section');

btn.addEvenListener('click',function(){
    console.log("Sa marche ?");
});*/