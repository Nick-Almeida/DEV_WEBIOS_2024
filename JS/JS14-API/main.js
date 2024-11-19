let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // Faço a consulta na API e retorno o JSON na variável resp
   let resp = await fetch(URL)

   // Pegar o retorno em JSON e transformar ele em um Objeto
   let exemplo = resp.json()
   console.log(exemplo)
}

DogApi()