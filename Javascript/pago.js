/* Elabore um algoritmo que calcule o que deve ser pago
por um produto, considerando o preço normal de etiqueta e
a escolha da condição de pagamento

Utilize a tabela para ler qual a condição de pagamento escolhida
- à vista débito - 10%
- à vista dinheiro ou pix - 15%
- em duas vezes - preço normal
- mais de duas vezes - preço normal + 10%*/

const preco = 100;
const pagamento = "duas vezes";
let pagamentoFinal;

if(pagamento == "debito"){
    pagamentoFinal = preco - (preco * 0.1);
} else if (pagamento == "dinheiro" || pagamento == "pix"){
    pagamentoFinal = preco - (preco * 0.15);
} else if (pagamento == "duas vezes"){
    pagamentoFinal = preco;
} else {
    pagamentoFinal = preco + (preco * 0.1);
}

console.log(pagamentoFinal);