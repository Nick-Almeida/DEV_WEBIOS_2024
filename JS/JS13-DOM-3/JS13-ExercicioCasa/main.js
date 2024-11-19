let salario = document.getElementById("salario")
let retornaRend = document.getElementById("retornaRend")

const Calcula = () => {
    let valorSalario = parseFloat(salario.value)
    let novoSalario = (valorSalario * 1.17) + 215
    novoSalario = novoSalario.toFixed(2)
    retornaRend.innerHTML = "O valor do salário com o aumento de 17% e o reajuste anual de 215 reais é: R$" + novoSalario  
}