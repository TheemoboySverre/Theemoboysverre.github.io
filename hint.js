// lage en variabel (const) som henter en knapp
// lage en variabel (const) som henter et tomt tekst element
// lage en variabel med en addEventListener "Click" som skla fylle det tomme tekst-elementet med et hint. 
let hint
let path = window.location.pathname
if(path== "/slide.html"){
    hint = "hint for spørsmål 1"
}
else if(path== "/slide.html"){
    hint = "Hint for såørsmpl"
}
const navnknapp = document.getElementById("hint")
const visresultat = document.getElementById("visresultat")
navnknapp.addEventListener("click",function(){

    console.log("denne knappen fungerer");    
    nummer ++
    window.location.href= "slide"+nummer+".html"
})
let noe = document.getElementById("svar")
let nummer = 0
