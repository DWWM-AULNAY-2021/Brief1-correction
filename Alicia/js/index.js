window.onload = function(){

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
      
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }



window.onload = function(){
var listeApprenant = ['Lyes', 'Kevin'];

var btnRandom = document.getElementById('btn-random');
btnRandom.addEventListener('click', function() {
    console.log(listeApprenant);
})


}