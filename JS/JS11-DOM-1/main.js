document.body.style.backgroundColor = "Black"

document.title = "Socorro DOM"
// Alterar o atributo lang para uma linguagem definida
document.documentElement.lang = "en";
// // Alterar o atributo lang para a linguagem do computador -> document.documentElement.lang = navigator.language;

// Criação de elementos
let botao = document.createElement("button")
botao.innerHTML = "Enviar"
document.body.appendChild(botao)    

botao.style.backgroundColor = "Aqua"
botao.style.borderRadius = "5px"