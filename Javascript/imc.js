/* Fórmula do IMC = peso / (altura * altura)

Elabore um algoritmo que, dado o peso e a altura de uma pessoa,
mostre sua condição de acordo com a tabela abaixo 

IMC em adultos Condição
abaixo de 18,5 Abaixo do peso
entre 18,5 e 25 Peso normal
entre 25 e 30 Acima do peso
entre 30 e 40 Obesidade
acima de 40 Obesidade grave
*/

let altura = 1.66, peso = 62;
let imc = peso / (altura * altura);

if(imc < 18.5){
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 25){
    console.log("Peso normal");
} else if (imc > 25 && imc <= 30){
    console.log("Acima do peso");
} else if(imc > 30 && imc <= 40){
    console.log("Obesidade");
} else {
    console.log("Obesidade grave");
}