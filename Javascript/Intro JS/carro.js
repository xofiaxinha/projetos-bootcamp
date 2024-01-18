class carro{
    marca;
    cor;
    gastoMedioKM;

    constructor(marca, cor, gastoMedioKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKM = gastoMedioKM;
    }

    valorGasto(quilometros, preco){
        return quilometros * this.gastoMedioKM * preco;
    }
};

const uno = new carro("Fiat", "Vermelho", 1/15);
const gol = new carro("Volkswagen", "Preto", 1/20);
const palio = new carro("Fiat", "Branco", 1/18);
const opala = new carro("Chevrolet", "Azul", 1/25);

console.log("O valor gasto para percorrer 100km com o " + uno.marca + " " + uno.cor + " é de R$" + uno.valorGasto(100, 5.58).toFixed(2));