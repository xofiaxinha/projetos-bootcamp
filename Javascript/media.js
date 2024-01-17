/* Faça um algoritmo que dado 3 notas tiradas por um aluno
em um semestre da faculdade, calcule e imprima a sua média e 
a sua classificação conforme a tabela abaixo*/

const nota1=9, nota2=8, nota3=4;

let media = (nota1+nota2+nota3)/3;

if(media < 5){
    console.log(media);
    console.log("Reprovado");
} else if (media >= 5 && media <= 7){
    console.log(media);    
    console.log("Recuperação");
} else {
    console.log(media);
    console.log("Aprovado");
}