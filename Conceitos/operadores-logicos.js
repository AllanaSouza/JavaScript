/**
 * && - e/and
 * || - ou/or
 * !  - não/not
 */

//&& - e/and
const nomeDog = "Pipoca";
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1;
const nomePossuiAteDezCaracteres = nomeDog.length <= 10;
console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres); // true

console.log(true && true); // true

// || - ou/or
const dog = {
    adotado: false,
    peso: 5.3
};

console.log(!dog.adotado || dog.peso < 10); // verdadeiro

console.log(true || true); // verdadeiro
console.log(true || false); // verdadeiro
console.log(false || true); // verdadeiro
console.log(false || false); // falso

//! - não/not
console.log(true); // verdadeiro
console.log(!true); // falso


/**
 * LÓGICOS - Operadores em JavaScript
 * Quais são os três operadores lógicos em JavaScript?
 * Qual o resultado da expressão true && false?
 * E da expressão true !! false?
 * O que o operador '!' faz com um valor boleano?
 * 
 */