// 1º Dado um número, imprima sua tabuada

function tabuada(n){
    for(let i = 1; i <= 10; i++){
        console.log(n + " x " + i + " = " + n*i);
    }
}

tabuada(5);

// 2º Dado um número, imprima todos os números pares de 0 até o número
function pares(n){
    for(let i = 0; i <= n; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
pares(10);