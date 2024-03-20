
let numero = Number(prompt("Digite um numero inteiro."))
let multiplicador = Number(prompt("Digite a quantia de vezes que ele deve ser multiplicado."))

i=1

while(i <= multiplicador){
    
    resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
    i++
    
}

