const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

// Usando promises
//const promise = fs.promises.readFile(filePath); //leirura de arquivo

//promise.then((arquivo) => arquivo.toString("utf8")) //transforma em string
//        .then((conteudo) => conteudo.split("\n").slice(1)) //transforma em array tirando o cabeçalho
//        .then((linhas) => linhas.map((linha) => 
//        {const [nome, feito] = linha.split(';')
//        return{
//            nome,
//            feito: feito === "true"}
//        }))
//        .then((lista) => {console.log(lista)})
//        .catch((error) => console.log("Erro!", error))//transforma em string

// Usando async/await

async function buscar(){
    try{
        const arquivo = await fs.promises.readFile(filePath);
        const conteudo = arquivo.toString("utf8");
        const linhas = conteudo.split("\n").slice(1);
        const lista = linhas.map((linha) => {
            const [nome, feito] = linha.split(';')
            return{
                nome,
                feito: feito === "true"
            }
        })
        console.log(lista);
    }
    catch(error){
        console.log("Erro!", error);
    }
}

buscar();