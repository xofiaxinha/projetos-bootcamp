// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = prompt('Escolha o nome do seu personagem: ');

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = prompt('Escolha entre "Atacar" ou "Fugir": ');

// TODO: Implemente uma solução utilizando lógica de programação;
const mensagens = {
  Atacar: `${this.nome} escolheu Atacar!`,
  Fugir: `${this.nome} escolheu Fugir!"`,
  Invalido: `Tente novamente`
}

const jogo = {
  nome: nomePersonagem,
  __proto__: mensagens
}

//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
function Verifique(jogo, acaoEscolhida){
  console.log(jogo[acaoEscolhida] || jogo.Invalido)
}

Verifique(jogo, acaoEscolhida)
//console.log(Verifique(jogo, acaoEscolhida))