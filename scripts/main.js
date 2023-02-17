/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

// Ici, j'ai mis la fonction lancerJeu() en commentaire pour ne pas être dérangé par l'affichage des popups. 
// lancerJeu()

let inputEcriture = document.getElementById("inputEcriture")
console.log(inputEcriture)

let btnValiderMot = document.getElementById("btnValiderMot")
console.log(btnValiderMot)

let zoneProposition = document.querySelector(".zoneProposition")
console.log(zoneProposition)

let spanScore = document.querySelector(".zoneScore span")
console.log(spanScore)

let listeBtnRadio = document.querySelectorAll(".optionSource input")
console.log(listeBtnRadio)