let numeros =[17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61, 59]

let filtraNumero = numeros.filter((valor) => {
    return valor> 20 && valor < 80
})

console.log(filtraNumero);