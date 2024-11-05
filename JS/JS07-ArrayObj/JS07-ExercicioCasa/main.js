let aluno = [
    {
        nome: "Ana",
        idade: 17,
        nota: 8,
        ano: "2ºB"
    },
    {
        nome: "Brunno",
        idade: 16,
        nota: 6,
        ano: "2ºC"
    },
    {
        nome: "Veronica",
        idade: 16,
        nota: 9,
        ano: "2ºC"
    },
    {
        nome: "Marta",
        idade: 15,
        nota: 5,
        ano: "3ºC"
    },
    {
        nome: "Brenno",
        idade: 19,
        nota: 6,
        ano: "3ºC"
    },
    {
        nome: "Maria",
        idade: 14,
        nota: 4,
        ano: "1ºF"
    }
]

// Todo o array
console.log(aluno);

// Todas as info do aluno Brunno
console.log(aluno[1]);

// Nota Maria
console.log("A nota da aluna Maria é: " + aluno[5].nota);

//Todo o array em JSON
console.log(JSON.stringify(aluno));


