class pessoa{
    nome;
    idade;
    altura;
    peso;
    constructor(nome, idade, altura, peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC(){
        let imc = this.calcularIMC();
        if(imc < 18.5){
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 25){
            return "Peso normal";
        } else if (imc > 25 && imc <= 30){
            return "Acima do peso";
        } else if(imc > 30 && imc <= 40){
            return "Obesidade";
        } else {
            return "Obesidade grave";
        }
    }
}

const pessoa1 = new pessoa("Pedro", 21, 1.70, 62);
const pessoa2 = new pessoa("Maria", 19, 1.66, 60);

console.log("O IMC de " + pessoa1.nome + " é " + pessoa1.calcularIMC().toFixed(2) + ", "
            + "classificado como " + pessoa1.classificarIMC() + ".");
console.log("O IMC de " + pessoa2.nome + " é " + pessoa2.calcularIMC().toFixed(2) + ", "
            + "classificado como " + pessoa2.classificarIMC() + ".");