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

fs.writeFileSync('pessoas.json', JSON.stringify(pessoas,null,4));

