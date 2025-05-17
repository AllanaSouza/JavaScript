/**
 * Gerador de tags de identificação
 * 
 * Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo
 * O dono irá informar nome, idade, peso, raça e se é adotado ou não
 * 
 * A tag deve ter:
 * O nome em letras maiusculas
 * A raça com a primeira letra maiuscula
 * Peso
 *
 * 
 */

const nome = "Dogo", raca = "vira-lata"
let idade = 1, peso = 1.2, adotado = false

const dogThor = {
    nome: "Thor",
    raca: "SRD",
    idade: 1,
    peso: 10.5,
    adotado: true
}

let nameUpperCase = nome.toUpperCase()
let racaFirstletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    paso: peso,
    raca: racaFirstletter
}]

console.log(animal)

const dogThorTag ={
    nome: dogThor.nome.toUpperCase(),
    raca: dogThor.raca.slice(0, 1).toUpperCase() + dogThor.raca.slice(1).toLowerCase(),
}

console.table(dogThorTag)