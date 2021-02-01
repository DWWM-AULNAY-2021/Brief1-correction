function randomize() {
    document.getElementById("btn").onclick = name;
}

function name() {
    var randomize = [],
        apprenant = ["Abdoulaye", "Alexis", "Alicia", "Asad", "Ayoub", "Bamba", "Caroline", "Denis", "Fodie", "Elyesse", "Lyes", "Flora", "Mohammed", "Gaelle", "Jonathan", "David", "Farima", "Maelys", "Lobna", "Kevin", "Muhammad"];
    randomize.push(apprenant.splice(Math.floor(Math.random() * apprenant.length), 1));

    document.getElementById("btn").innerHTML = randomize.join(", ");
}

randomize();
//
// 
//
let span1 = document.getElementById("span-etendre1");
let span2 = document.getElementById("span-etendre2");
let span3 = document.getElementById("span-etendre3");
let span4 = document.getElementById("span-etendre4");
let ul1 = document.getElementById("ul-display1");
let ul2 = document.getElementById("ul-display2");
let ul3 = document.getElementById("ul-display3");
let ul4 = document.getElementById("ul-display4");
span1.addEventListener("click", () => {
    if (getComputedStyle(ul1).display != "none") {
        ul1.style.display = "none";
    } else {
        ul1.style.display = "block";
    }
})
span2.addEventListener("click", () => {
    if (getComputedStyle(ul2).display != "none") {
        ul2.style.display = "none";
    } else {
        ul2.style.display = "block";
    }
})
span3.addEventListener("click", () => {
    if (getComputedStyle(ul3).display != "none") {
        ul3.style.display = "none";
    } else {
        ul3.style.display = "block";
    }
})
span4.addEventListener("click", () => {
    if (getComputedStyle(ul4).display != "none") {
        ul4.style.display = "none";
    } else {
        ul4.style.display = "block";
    }
})

let btnCharte = document.getElementById("btn-charte");
btnCharte.addEventListener("click", () => {
    window.location = 'https://docs.google.com/document/d/1F0u_2i1WaeH4Q4Rj0GrUqi-fOqGMufwzziaG5qd4tk0/edit#';
})