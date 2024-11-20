let URL = "https://viacep.com.br/ws/01001000/json/"

let cep = document.getElementById('cep')
let logradouro = document.getElementById('logra')
let complemento = document.getElementById('comp')

async function BuscaCep(){
    await fetch(URL).then((response) => {

       return response.json()
    }).then((response) => {
        // Jeito 1
        cep.value = response.cep
        logradouro.value = response.logradouro
        complemento.value = response.complemento

        // Jeito 2
        document.getElementById('bairro').value = response.bairro
        document.getElementById('estado').value = response.estado
    })

}

BuscaCep();