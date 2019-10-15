var front = document.getElementById("frontPage");
var lunes = document.getElementById("lunes");
let martes = document.getElementById("martes");
let miercoles = document.getElementById("miercoles");
let jueves = document.getElementById("jueves");
let viernes = document.getElementById("viernes");
var articleFront = document.querySelector("#front");
var article1 = document.getElementById("article1");
var article2 = document.getElementById("article2");
var article3 = document.getElementById("article3");
var article4 = document.getElementById("article4");
var article5 = document.getElementById("article5");

lunes.addEventListener("click", ()=>{
    articleFront.classList.add("not-visible");
    article1.classList.remove("not-visible");
    article2.classList.add("not-visible");
    article3.classList.add("not-visible");
    article4.classList.add("not-visible");
    article5.classList.add("not-visible");
});

martes.addEventListener("click", ()=>{
    articleFront.classList.add("not-visible");
    article2.classList.remove("not-visible");
    article1.classList.add("not-visible");
    article3.classList.add("not-visible");
    article4.classList.add("not-visible");
    article5.classList.add("not-visible");
});

miercoles.addEventListener("click", ()=>{
    articleFront.classList.add("not-visible");
    article3.classList.remove("not-visible");
    article1.classList.add("not-visible");
    article2.classList.add("not-visible");
    article4.classList.add("not-visible");
    article5.classList.add("not-visible");
});

jueves.addEventListener("click", ()=>{
    articleFront.classList.add("not-visible");
    article4.classList.remove("not-visible");
    article1.classList.add("not-visible");
    article3.classList.add("not-visible");
    article2.classList.add("not-visible");
    article5.classList.add("not-visible");
});

viernes.addEventListener("click", ()=>{
    articleFront.classList.add("not-visible");
    article5.classList.remove("not-visible");
    article1.classList.add("not-visible");
    article3.classList.add("not-visible");
    article4.classList.add("not-visible");
    article2.classList.add("not-visible");
});

front.addEventListener("click",()=>{
    articleFront.classList.remove("not-visible");
    article5.classList.add("not-visible");
    article1.classList.add("not-visible");
    article3.classList.add("not-visible");
    article4.classList.add("not-visible");
    article2.classList.add("not-visible");
})