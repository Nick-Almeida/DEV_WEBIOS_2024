// //Verificar se o Caio está com a blusa do IOS

// let CaioComBlusa = true

// if (CaioComBlusa == true) {
//     console.log("Caio pode assistir a aula!");
// }else{
//     console.log("Caio não pode ver a aula");
// }

// console.log("//////////////////////////////////////////////////////////////////")

// // Um jogador somente irá passar para a fase 2 se atingir 1000 pontos

// let pontos = 1000

// if (pontos >= 1000) {
//     console.log("Você passou para a fase 2!");
// }else{
//     console.log("Foi por pouco, tente novamente!");
// }

// console.log("//////////////////////////////////////////////////////////////////")

// // Teste se número é par ou impar

// let imparPar= 18

// if (imparPar % 2 == 0) {
//     console.log("Este número é par");
// }else{
//     console.log("Este número é ímpar");
// }

// console.log("//////////////////////////////////////////////////////////////////")

// let media, faltas;
// media = 10
// faltas = 4
// // 6.5
// if (media >= 7 && faltas <= 5){
//     console.log(`Aluno Aprovado.`);
// } else if (media >= 6.5 && faltas <= 5) {
//     console.log(`Aluno Ap. Conselho.`);
// } else {
//     console.log(`Aluno Reprovado.`);
// }

// console.log("//////////////////////////////////////////////////////////////////")

// 1 - Ótimo
// 2 - Bom
// 3 - Regular
// 4 - Ruim
// 5 - Péssimo

let valor = 3

switch (valor) {
    case 1:
        console.log("Atendimento ótimo")
        break;
    case 2:
        console.log("Atendimento bom")
        break;
    case 3:
        console.log("Atendimento regular")
        break;
    case 4:
        console.log("Atendimento ruim")
        break;            
    case 5:
        console.log("Atendimento Péssimo")
        break;
    default:
        console.log("Você não foi avaliado")
        break;
}