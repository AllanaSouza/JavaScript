/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Samuel',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Prog JS'
}])


/*
* Constantes de Variáveis
*/ 

// Variáveis não têm espaço. Usam letra maiuscula na primeira letra a partir da segunda palavra
// JS é dinamicamente tipada (não precisa declarar o tipo da variável)


// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// CONSTANTE: informações que nunca mudam (obrigatório atribuir um valor)
const nome = 'Loki'
const raca = 'SRA / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// VARIÁVEL: informações que podem mudar (não é obrigatório atribuir um valor)
let idade = 5           //Number
let peso = 10.5         //Number
let vacinado = true     //Boolean
let castrado = false    //Boolean
let tamanho = 'M'       // String


// hoisting -> içamento ou elevação
const irmaos = [
    {
        nome: "Thor",
        idade: 2
    },
    {
        nome: "Hela",
        idade: 3
    }
]

console.table(irmaos)

/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
 * 
 * String - Cadeia
 * Number - inteiro/real
 * Boolean - logico
 * Array - vetor/matriz
 * 
 * undefined
 * null
 * 
 * BigInt = Number para números extremamente grandes
 * Symbol = 'identificador único'
 * 
 */

console.log("5" + 1)

const pet = [{ nome: 'Lure ', idade: '2 anos' }]
console.table(pet)
