// Passo 1: Capturar o número digitado pelo usuário.

// Passo 2: Importar o array de pessoas

// Passo 3: Remover a pessoa da posição desejada

// Passo 4: Salvar o array modificado (sem a pessoa) no arquivo

/* Salas 4,5,6 */

let pessoas = require('./pessoas.json');
const fs = require('fs');

console.table(pessoas);
let removerPessoa = 5;

console.log(`Removendo a pessoa da posição ${removerPessoa}`);
pessoas.splice(removerPessoa);
console.log('-'.repeat(103));
console.log('Novo Array de Pessoas atualizado');
console.table(pessoas);

fs.writeFileSync('pessoas.json', JSON.stringify(pessoas));

