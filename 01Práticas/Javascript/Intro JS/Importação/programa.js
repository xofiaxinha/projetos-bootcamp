const {gets, print} = require('./auxiliar.js');

let maior = 0;
for(let i =0; i<5; i++){
    const numero = gets();
    if(numero > maior){
        maior = numero;
    }
}

print(maior);