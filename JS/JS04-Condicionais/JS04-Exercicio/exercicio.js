let peso
let altura
let imc

peso = Number(prompt("Digite seu peso em Kg"))
altura = Number(prompt("Digite sua altura em metros, usando . para separar"))

imc = peso / (altura * altura)

if (imc < 18.5) {
    alert("Seu IMC é " + imc.toFixed(2) + " Você está abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
    alert("Seu IMC é " + imc.toFixed(2) + " Você está com um peso normal")
} else {
    alert("Seu IMC é " + imc.toFixed(2) + " Você está acima do peso")
}