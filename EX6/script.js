
let numero = Number(prompt("Digite um numero inteiro."))



for(i=numero; i>0; i-=1){

let divisivel = 0    


    for(b=1;b<=i;b++){
        let resto = i%b
        if(resto == 0){
                
                divisivel++

        }
    }
if(divisivel <= 2){
    console.log(`[${i}]`)
}
else{
    console.log(`${i}`)
}

}
