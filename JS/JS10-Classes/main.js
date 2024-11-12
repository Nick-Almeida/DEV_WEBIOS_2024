class Aluno  {
    constructor(nome, ano, altura, isCracha, isUniforme, cor) {
        this.nome = nome;
        this.ano = ano;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isUniforme = isUniforme;
        this.cor = cor;
    }

    retornaIdade(){
        
    }
}

//instancia == cópias
let aluno1 = new Aluno ("Manasses", 1997, 1.90, true, true, "Black")

let aluno2 = new Aluno ("Jeferson", 2005, 1.75, true, true, "White")

console.log(aluno1)
console.log(aluno2)