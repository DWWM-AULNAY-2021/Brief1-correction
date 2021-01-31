var h3 = document.querySelectorAll("h3");

for (var i = 0; i < h3.length; i++) {
    h3[i].addEventListener("click", function () {
        var details = this.nextElementSibling;
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    })
}


var button = document.querySelector("button");

button.addEventListener("click", function postMessage() {
    var promo = ["Jérémy", "Charalambos", "Abdoulaye", "Asad", "Charles", "David", "Denis", "Fodie", "Jonathan", "Mohamed", "Farima", "Adil", "Alexis", "Ayoub", "Lyas", "Elyesse", "Bamba", "Caroline", "Gaëlle", "Jules", "Loubna", "Kévin", "Maëlys", "Muhammad", "Nasser"];
    var random = promo[Math.floor(Math.random() * promo.length)];
    button.textContent = random;
})
