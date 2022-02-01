/*
Criar um arquivo remover.js
Esse script deve receber um número como parâmetro
e deve remover a pessoa da posição indicada pelo número
*/


// Passo 1: Capturar o número digitado pelo usuário.

// Passo 2: Importar o array de pessoas

// Passo 3: Remover a pessoa da posição desejada

// Passo 4: Salvar o array modificado (sem a pessoa) no arquivo

/* Salas 4,5,6 */

let pessoas = require('./pessoas.json');
const fs = require('fs');

console.table(pessoas);
let removerPessoaAPartirDaPosicao = 1;
let removerPessoaAteAPosicao = 2;
console.log(`Removendo a pessoa a partir da posição ${removerPessoaAPartirDaPosicao} até a posição: ${removerPessoaAteAPosicao}`);
pessoas.splice(removerPessoaAPartirDaPosicao, removerPessoaAteAPosicao);
console.log('-'.repeat(103));
console.log('Novo Array de Pessoas atualizado');
console.table(pessoas);

fs.writeFileSync('pessoas.json', JSON.stringify(pessoas));

