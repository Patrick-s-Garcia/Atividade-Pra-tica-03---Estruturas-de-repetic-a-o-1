
let menor = Infinity
let maior = -Infinity


for(let i = 1; i<=15; i++){
    let altura = parseFloat(prompt("Digite a altura "+i))
    console.log(altura)

    if(altura<menor){
        menor=altura
    }
    if(altura>maior){
        maior=altura
    }
}

console.log(`A maior altura é ${maior}`)
console.log(`A menor altura é ${menor}`)


