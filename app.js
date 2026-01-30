let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio!'

function consoleClicado() {
    console.log('Olá, tudo bem? O Botão foi clicado!')
}

function botaoAlerta() {
    alert('Eu amo JS!')
}

function promptCidade() {
    let nome = prompt('Digite seu nome completo')
    let nomeCidade = prompt('Qual é o nome da cidade onde mora?')
    alert(`Olá ${nome}! Estive em ${nomeCidade} e lembrei de você!`)
}

function somaInteiro() {
    let numero1 = prompt('Digite um número inteiro');
    let numero2 = prompt('Digite outro número inteiro');
    let soma = Number(numero1) + Number(numero2)
    alert(`A soma de ${numero1} e ${numero2} é igual a ${soma}`)
}
