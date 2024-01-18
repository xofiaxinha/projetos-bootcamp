const {gets, print} = require('./auxiliar.js');

const numeros = [];
for(let i=0; i<5; i++){
    numeros.push(gets());
}

let maior = 0;
for(let i =0; i<numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i];
    }
}

print(maior);