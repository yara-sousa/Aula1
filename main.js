//let nome = prompt("Qual é seu nome")
///let nota = prompt("Nota 1 ")
///let nota2 = prompt("Nota 2 ")
///let nota3 = prompt("Nota 3 ")
///let media = (nota+nota2) /2
//console.log("Seu nome é " +nome)
//console.log("nome: ", nome)
//console.log(`Suas notas são" ${nota}, ${nota2} e ${nota3}`)
//alert(nome + media)

let nome = document.getElementById("nome")
let nota1 = document.getElementById("nota1")
elemBotao.onclick = fazAlgo

console.log(document)
console.log(elem)
elem.style.backgroundColor = "red"

fazAlgo()

function fazAlgo(){
    console.log("Faz algo");
}
