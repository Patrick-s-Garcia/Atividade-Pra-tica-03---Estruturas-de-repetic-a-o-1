
let maior = -Infinity
let menor = Infinity

let soma = 0
let media = soma / 10

let positivo = 0
let negativo = 0


let i = 1

for(i=1;i<10;i++){

    let numero = Number(prompt(`Digite o numero ${i}.`))

    soma += numero 

    if(numero>maior){
        maior=numero
    }
    if(numero<menor){
        menor=numero
    }
    if(numero>0){
        positivo++
    }
    if(numero<0){
        negativo++
    }

    

}

console.log(`A média dos valores é de ${media}`)
console.log(`A quantidade de valores positivos é ${positivo}`)
console.log(`A quantidade de valores negativos é ${negativo}`)
console.log(`O percentual de valores positivos é ${(positivo/10)*100}%`)
console.log(`O percentual de valores negativos é ${(negativo/10)*100}%`)
console.log(soma)
console.log(soma/10)