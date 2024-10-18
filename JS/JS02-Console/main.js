'use strict'
//Quando eu quero criar uma variável, preciso inserir antes do nome dessa variável as palavras reservadas var/let/const

// let nomeAluno = 0

// console.log(nomeAluno)

// nomeAluno = "nome"

// console.log(nomeAluno)

// let valor, num1, num2
// num1 = 10
// num2 = 20

// valor = num1 > num2
// valor = num1 >= num2
// valor = num1 < num2
// valor = num1 <= num2
// valor = num1 == num2
// valor = num1 === num2
// valor = num1 != num2
// console.log(valor)

// let nome = "Ermeson"
// let num = 5
// let num1 = 10
// console.log(typeof num)
// console.log(num + num1)
// console.log(nome.length)

// let nota1, nota2, nota3, nota4, media, faltas

// nota1 = 7
// nota2 = 4
// nota3 = 8
// nota4 = 8
// faltas = 5
// media = (nota1 + nota2 + nota3 + nota4) / 4

// let res = media >= 7 && faltas <= 5 ? "Aprovado" : "Reprovado"

// console.log("Sua média foi: " + media + ".","Suas faltas foram: " + faltas + ".", "Você foi " + res);
 
// let nome = prompt("Qual o seu nome?")
// alert(`Olá ${nome}!`)

// Number(prompt(num)) - Inteiro e quebrado
// parseInt(prompt(num)) - Número inteiro
// parseFloat(prompt(num)) - Número quebrado

alert("Olá, Mundo!")

let nome = parseInt(prompt("Qual seu nome?"))
alert ("Bem vindo " + nome)

let idade = prompt("Qual sua idade?")

let maiorIdade = idade >= 18
? "maior de idade" : "menor de idade"
alert ("Você é " + maiorIdade)