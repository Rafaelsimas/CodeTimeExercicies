/* 

Crie  uma arrow function que calcule 2 numeros e mostre o resultado no console
*/

const soma = (x, y) => {
    console.log(x + y);
}

const retultado = soma(30, 30)

/* 
Crie uma arrow function que mostre no console o seu nome e sobrenome
Obs: A função deve receber dois parâmetros
*/

const falaNome = (nome, sobrenome) => {
   const nomeCompleto = nome + sobrenome
   return nomeCompleto
}

const nomeUsuario = 'Rafael '
const sobreNomeUsuario = 'Simas'
const result = falaNome(nomeUsuario, sobreNomeUsuario)
console.log(result);

/* 
Crie um programa que calcula o aluguel de um apartamento.
OBS: Vocè deve passar 3 parâmetros para esta função.
1- A metragem do apartamento
2- A quantidade de quartos
3- O valor base do aluguel que é 1600 afinal, estamos falando de um ap no centro 😄
4- Mostre o valor no console com a seguinte mensagem.

`O aluguel custa xxxxxxx por mês`
Obervação, o valor deve ser arredondondao com 2 casas decimais.
*/

const calularAluguel = (metragem, qtdQuartos, valorBase) => {
    const calcular = (metragem * qtdQuartos) + valorBase
    return calcular
}

const m2 = 40
const qtd = 2
const valor = 1600

const resultado = calularAluguel(m2, qtd, valor)
console.log(`O aluguel custa ${resultado.toFixed(2)} por mês`);
