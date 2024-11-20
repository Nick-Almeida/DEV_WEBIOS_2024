let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // Faço a consulta na API e retorno o JSON na variável resp
   await fetch(URL).then((response) => {
        // Transformar o JSON recebido pelo FETCH em OBJ
        return response.json();
   }).then((response) => {
        // Apresentar as informações para o usuário
        // Transformando novamente o OBJ em JSON
        document.getElementById('mostraJSON').innerText = JSON.stringify(response)

        let image = `
            <img style="width: 400px; height: 400px;" src="${response.message}" alt="">
        `

        document.getElementById('mostraDog').innerHTML = image
   })

   // Pegar o retorno em JSON e transformar ele em um Objeto
//    let exemplo = resp.json()
//    console.log(exemplo)
}