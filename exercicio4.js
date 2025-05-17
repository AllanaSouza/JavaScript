/**
 * Calculadora de ração diária
 * 
 * crie um script que receba o peso do dog em kg + estoque atual de ração em gramas.
 * Calcula a quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso x 30
 * 
 * Exiba:
 * - nome do dog
 * - peso
 * - quantidade de ração recomendada por dia
 * - quantos dias o estoque atual vai durar
 */

const nome  = 'Mel'
const peso = 20
const estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log('Nome do dog: ${ nome }')
console.log('Peso: ${ peso }')
console.log('Gramas por dia: ${ gramasPorDia}')
console.log('O estoque vai durar: ${ duracaoEstoque}')

//ALTERNATIVA com função

function calcularConsumoDeRacao(peso, estoque){
    const gramasPorDia = peso * 30
    const duracaoEstoque = Math.floor(estoque / gramasPorDia)

    console.log('----------------------')
    console.log('Nome do dog: ${nome}')
    console.log('Peso: ${peso}kg')
    console.log('Gramas por dia: ${gramasPorDia}g')
    console.log('O estoque vai durar: ${duracaoEstoque} dias')
    console.log('----------------------')    
}

calcularConsumoDeRacao('Ada', 1, 2000)
calcularConsumoDeRacao('Laninha', 4.2, 15000)
calcularConsumoDeRacao('Pantera', 14.5, 5000)