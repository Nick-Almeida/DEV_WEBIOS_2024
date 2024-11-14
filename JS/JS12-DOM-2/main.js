// Vamos desenvolver uma tabuada

let valor = document.getElementById("recebeValor")
let resultado = document.getElementById("resultado")

const Tabuada = () => {
    // value - guardar o valor que está sendo digitado
    let guardaValor = valor.value
    if(guardaValor == ""){
        let mensagem = resultado.innerHTML = "<pre>" + "Insira um valor válido"
        resultado.style.color = "red"
    }else{
        resultado.innerHTML = ""
        resultado.style.color = "black"
        for (i = 0; i <= 10; i++){
        console.log(guardaValor + "x" + i ,"=" ,guardaValor * i)
        document.getElementById("resultado").innerHTML += "<pre>" + guardaValor + "x" + i + "=" + guardaValor * i
        }  
    }
}

const Limpar = () =>{
    valor.value = ""
    resultado.innerHTML = ""
}