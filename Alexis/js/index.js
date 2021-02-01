window.onload = function() {

  var btnCharte = document.getElementById('btn-charte');
  btnCharte.addEventListener('click', function() {
    window.open('https://docs.google.com/document/d/1F0u_2i1WaeH4Q4Rj0GrUqi-fOqGMufwzziaG5qd4tk0/edit#heading=h.xapcjc4w9ql1', '_blank')
  });

//-------------------------------//
//    Solution Repeat Yoursefl   //
//-------------------------------//
  ///*
  var elementSectionReussite = document.getElementById("section-reussite");
  var elementSectionEnsemble = document.getElementById("section-ensemble");
  var elementSectionCovid = document.getElementById("section-covid");
  var elementSectionFun = document.getElementById("section-fun");
  
  
  elementSectionReussite.addEventListener('click', function() {
    elementSectionReussite.classList.toggle('is-not-expand');
  });

  elementSectionEnsemble.addEventListener('click', function() {
    elementSectionEnsemble.classList.toggle('is-not-expand');
  });

  elementSectionCovid.addEventListener('click', function() {
    elementSectionCovid.classList.toggle('is-not-expand');
  });

  elementSectionFun.addEventListener('click', function() {
    elementSectionFun.classList.toggle('is-not-expand');
  });

  //*/

//-------------------------------//
// Solution Dont repeat Yoursefl //
//-------------------------------//
  /*

  var listCards = document.querySelectorAll(".card");

  for (var card = 0; card < listCards.length; card++) {
      var currentCard = listCards[card];

      currentCard.addEventListener('click', function() {
          this.classList.toggle('is-not-expand');
      })
  }
  //*/ 
/* _______________*/
  var btnRandom = document.getElementById('btn-random'); 
  console.log(btnRandom);
  btnRandom.addEventListener('click', function() {
    btnRandom.innerHTML = 'Prêts ?!';
    var listeApprenant = ["Abdoulaye","Abdoul-Nasser","Maxime" ,"Alexis","Alicia","Asad","Ayoub","Ahmadu-Bamba","Caroline", "Charles","David","Denis","Elyesse","Farima","Flora","Fodié","Gaëlle","Jonathan","Kevin","Lobna","Lyes","Maëlys","Muhammad","Mohamed"];
    var numApprenant = Math.floor(Math.random() * listeApprenant.length);

    setTimeout(function() {
      btnRandom.innerHTML = listeApprenant[numApprenant] + ' !!!';
    }, 2000)
  })
}