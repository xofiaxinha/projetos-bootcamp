/*obj: normalmente declarado entre chaves, é um objeto que contém propriedades e métodos*/
const obj = {
    nome: "João",
    idade: 30,
    profissao: "Programador"
};

console.log(obj.nome);

// por ser uma coleção dinâmica, eu posso declarar novas propriedades e métodos
obj.altura = 1.70;
console.log(obj.altura);

// uma função dentro de um objeto é chamada de método
obj.falarNome = function() {
    console.log("Meu nome é: " + this.nome);
}
obj.falarNome();

obj.nome = "José";
obj.falarNome();

// classes
class pessoa{
    nome;
    idade;
    
    //construtor
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    descrever(){
        console.log("Meu nome é: " + this.nome + " e tenho " + this.idade + " anos.");
    }
}

// instanciando um objeto
const pessoa1 = new pessoa("Pedro", "21");
pessoa1.descrever();

function comparar_pessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(p1.nome + " é mais velho que " + p2.nome);}
    else if(p1.idade < p2.idade){
        console.log(p2.nome + " é mais velho que " + p1.nome);}
    else{
        console.log(p1.nome + " e " + p2.nome + " tem a mesma idade.");}
}

const pessoa2 = new pessoa("Maria", "19");
comparar_pessoas(pessoa1, pessoa2);