var h4 = document.querySelectorAll("h4");

for (var i = 0; i < h4.length; i++) {
    h4[i].addEventListener("click", function () {
        var details = this.nextElementSibling;
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    })
}

var btnCharte = document.getElementById('btn_charte');
btnCharte.addEventListener('click', function() {
  window.open('https://docs.google.com/document/d/1F0u_2i1WaeH4Q4Rj0GrUqi-fOqGMufwzziaG5qd4tk0/edit#heading=h.xapcjc4w9ql1', '_blank')
});


var btnRandom = document.getElementById('btn_random'); 
  console.log(btnRandom);
  btnRandom.addEventListener('click', function() {
    btnRandom.innerHTML = 'Prêts ?!';
    var listeApprenant = ["Abdoulaye","Abdoul-Nasser","Maxime" ,"Alexis","Alicia","Asad","Ayoub","Ahmadu-Bamba","Caroline", "Charles","David","Denis","Elyesse","Farima","Flora","Fodié","Gaëlle","Jonathan","Kevin","Lobna","Lyes","Maëlys","Muhammad","Mohamed"];
    var numApprenant = Math.floor(Math.random() * listeApprenant.length);

    setTimeout(function() {
      btnRandom.innerHTML = listeApprenant[numApprenant] + ' !!!';
    }, 2000)
  })




