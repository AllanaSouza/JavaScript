/**
 * Validador de nomes para as tags
 * 
 * Alguns donos estão registrando os dogs com nomes mal formatados.
 * Crie um script para limpar e padronizar
 * 
 * Aplique as formatações e exiba:
 * - O nome original, como foi cadastrado
 * - O nome formatado
 * 
 * Extra: 
 * - aplique uma regra que confira se o nome informado possui apenas uma palavra.
 * - Exiba se o nome é válido ou não
 * 
 * Exemplos:
 * 
 *  - nomes válidos
 *      - Pipoca
 *      - Guaraná
 *      - Paçoca
 *  - nomes inválidos
 *      - Peggy Carter
 */


function limparENormalizarNome(nome) {
    // Remover caracteres especiais, mantendo apenas letras
    let nomeLimpo = nome.replace(/[^a-zA-ZÀ-ÿ]/g, "").trim();

    // Separar por espaços e verificar se há mais de uma palavra
    let palavras = nomeLimpo.split(/\s+/);

    if (palavras.length > 1) {
        console.log("Nome inválido: mais de uma palavra.");
        return null;
    }

    // Transformar a primeira letra em maiúscula e o restante em minúscula
    let nomeFormatado = nomeLimpo.charAt(0).toUpperCase() + nomeLimpo.slice(1).toLowerCase();

    return nomeFormatado;
}

// Testando o script
const nomeDog = "th     oR@!%   ";

let nomeFormatado = limparENormalizarNome(nomeDog);

console.log("Nome original:", nomeDog);
console.log("Nome formatado:", nomeFormatado ? nomeFormatado : "Inválido");





