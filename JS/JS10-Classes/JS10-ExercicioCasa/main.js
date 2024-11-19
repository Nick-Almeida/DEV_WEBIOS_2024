class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta){
        this.nome = nome;
        this.idade = idade
        this.salario = salario
        this.sexo = sexo
        this.agencia = agencia
        this.conta = conta
        this.numeroConta = numeroConta
    }
    contaPoupança() {
        let taxa = 0.015
        this.salario -= this.salario * taxa
    
        console.log("Conta Poupança de " + this.nome + "\nIdade: " + this.idade + " anos" + "\nSexo: " + this.sexo + "\nA agêcia bancária é: " + this.agencia + "\nNúmero da conta: " + this.numeroConta + "\nA conta é: " + this.conta + "\nA taxa de administração é: " + taxa + "%" + "\nO salário com o desconto da taxa é de: R$" + this.salario);
        
    }
    contaCorrente() {
        let taxa = 0.036
        this.salario -= this.salario * taxa
        
        console.log("Conta Poupança de " + this.nome + "\nIdade: " + this.idade + " anos" + "\nSexo: " + this.sexo + "\nA agêcia bancária é: " + this.agencia + "\nNúmero da conta: " + this.numeroConta + "\nA conta é: " + this.conta + "\nA taxa de administração é: " + taxa + "%" + "\nO salário com o desconto da taxa é de: R$" + this.salario);
    }
    contaEstudate() {
        let taxa = 0.012
        this.salario -= this.salario * taxa
        
        console.log("Conta Poupança de " + this.nome + "\nIdade: " + this.idade + " anos" + "\nSexo: " + this.sexo + "\nA agêcia bancária é: " + this.agencia + "\nNúmero da conta: " + this.numeroConta + "\nA conta é: " + this.conta + "\nA taxa de administração é: " + taxa + "%" + "\nO salário com o desconto da taxa é de: R$" + this.salario);
    }
}

let contaPoup1 = new contaBancaria ("José", 42, 6500, "Masculino", 7305,"Inter", 423818)
let contaPoup2 = new contaBancaria ("Laura", 19, 1400, "Feminino", 9385,"Santander", 554146)
let contaPoup3 = new contaBancaria ("Ana Maria", 25, 3000, "Feminino", 9583, "Nubank", 488333)

contaPoup1.contaPoupança()
contaPoup2.contaPoupança()
contaPoup3.contaPoupança()

let contaCorre1 = new contaBancaria("Ramon", 30, 7000, "Marculino", 8593, "Bradesco", 278427);
let contaCorre2 = new contaBancaria("Felipe", 22, 4500, "Masculino", 3724, "Banco do Brasil", 451672);
let contaCorre3 = new contaBancaria("Ângela", 55, 12000, "Feminino", 7593, "C6", 253442);

contaCorre1.contaCorrente();
contaCorre2.contaCorrente();
contaCorre3.contaCorrente();

let contaEstud1 = new contaBancaria("Eduardo", 34, 8200, "Masculino", 7593, "Caixa", 130986);
let contaEstud2 = new contaBancaria("Paloma", 23, 2200, "Feminino", 8567, "Nubank", 873316);
let contaEstud3 = new contaBancaria("Nicolas", 22, 2400, "Masculino", 8694, "Satander", 283479);

contaEstud1.contaEstudate();
contaEstud2.contaEstudate();
contaEstud3.contaEstudate();