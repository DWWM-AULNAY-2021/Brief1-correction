function randomize() {
    document.getElementById("random").onclick = name;
}

function name() {
    var randomize = [],
        apprenant = ["Abdoulaye", "Alexis", "Alicia", "Asad", "Ayoub", "Bamba", "Caroline", "Denis", "Fodie", "Elyesse", "Lyes", "Mohammed", "Gaelle", "Jonathan", "David", "Farima", "Maelys", "Flora", "Kevin", "Muhammad"];
    randomize.push(apprenant.splice(Math.floor(Math.random() * apprenant.length), 1));

    document.getElementById("text").innerHTML = randomize.join(", ");
}

randomize();

let span = document.getElementsByClassName("span.main-span");
let trigger = document.getElementsByClassName("div.trigger");
for (var i = 0; i < span.length; i++) {
    span[i].addEventListener("click", function() {
        if (trigger.style.display != "block") {
            trigger.style.display = "block";
        } else {
            trigger.style.display = "none";
        }
    })
}