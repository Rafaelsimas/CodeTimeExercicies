//Crie uma variável chamada nome mas não atribua valor
let nome;

//Na próxima linha, atribua qualquer valor a variável anteriormente criada e mostre no console
nome = 'rafael'
console.log(nome);
//Crie uma variável de nome numero1 e atribua qualquer valor
let numero1 = 20
//Crie uma variável de nome numero2 e atribua a essa variável, a variável de numero 1 e mostre no console
let numero2 =  numero1
console.log(numero2);
//Cria uma variável com qualquer valor
let numeroAleatorio1 = 20
//Cria outra variável com qualquer valor
let numeroAleatorio2 = 28
//Some o valor das duas variáveis e mostre no console
let resultado = numeroAleatorio1 + numeroAleatorio2
console.log(resultado);
/* 
Cria uma função de nome soma mas não execute a função
*/

function soma(){

}

/* 

Faça uma função que calcule 2 numeros e mostre o resultado no console
*/

function somaDois(x, y){
    console.log(x + y)
}
somaDois(2, 2)

/* 
Crie uma função que mostre no console o seu nome e sobrenome
Obs: A função deve receber dois parâmetros
*/

function digaMeuNome(nome, sobrenome){
    console.log(nome, sobrenome);
}
const nomeDoUsuario = 'Rafael'
const sobreNomeDoUsuario = 'Simas'
const result = digaMeuNome(nomeDoUsuario, sobreNomeDoUsuario)

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

function aluguel(metro, quartos, base){
    const calculo = metro * quartos + base
    return calculo
}

const valorBase = 1600
const metragem = 40
const qtdQuartos = 2

const resultadoDaBusca = aluguel(metragem, qtdQuartos, valorBase)
console.log(`O aluguel custa ${resultadoDaBusca.toFixed(2)} por mês`);

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

const valorFinal = calularAluguel(m2, qtd, valor)
console.log(`O aluguel custa ${valorFinal.toFixed(2)} por mês`);

//Crie um array de carros com os modelos que você conhece. Quanto maior o número de itens no array melhor
const carros = ['Pálio', 'Corsa', 'Prisma', 'Cobalt','Onix', 'Hb20', 'Hrv', 'Bmw', 'Ferrari', 'Lamborghini']
console.log(`Meus carros ${carros}`);

/* 
Adicione a ( Paulinha ) na última posição do array e mostre no console a seguinte mensagem
Bem vinda aluna Paulinha
*/

const alunos = ['Fernando', 'Caio', 'André', 'Lethícia', 'João Pedro', 'Barbara', 'Glória', 'Franciele', 'Suellen', 'Renan', 'Ricardo', 'José Carlos', 'Geovani']
console.log(`Meus alunos ${alunos}`);
alunos.push('Paulinha')
console.log(`Bem vinda aluno ${alunos[alunos.length-1] }`);

//Mostre o aluno João Pedro no console
console.log(`Boas vindas aluna ${alunos[4]}`);

//Adicione o Everaldo na primeira posição do array e mostre o array no console
alunos.unshift('Everaldo')
console.log(alunos);

//Exclua a Franciele do array e mostre o array no console
alunos.splice(8)
console.log(alunos);
/* 
Crie uma função chamada buscar funcionário que ao clicar em um butão no html, faça uma busca no array e compare se o valor digitado no campo input é o mesmo valor que existe no array.
Se o valor digitado existir no array, você deve fazer com que a mensagem abaixo seja exibida em tela
Resultado da busca `Nome do funcionario`
se não existir
Resultado da busca: Funcionário não encontrado
*/
const funcionarios = ['Hudna', 'Rafael', 'Camila', 'Helen', 'Marcelo Gaúcho', 'Grase', 'Murilo', 'Ana', 'Júlia', 'Hiata', 'Sandra', 'João', 'Paulinho', 'Gui', 'Carlos', 'Paloma']

function buscarFuncionario(){
    const entradaDoUsuario = document.querySelector('.entrada').value
    if(funcionarios.indexOf(entradaDoUsuario) > -1){
        document.querySelector('.demo').innerHTML = `Resultado da busca: ${entradaDoUsuario}`
    }else{
        document.querySelector('.demo').innerHTML = 'Resultado da busca: funcionario não encontrada'
    }
}

