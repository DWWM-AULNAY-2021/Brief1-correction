window.onload = function() {

	var listeApprenant = ['Kevin','Lyes'];
	console.log(listeApprenant);

	var btnRandom = document.getElementById('bouton-random');
	btnRandom.addEvenListener('click' , function(){
		console.log(listeApprenant);
	})

}