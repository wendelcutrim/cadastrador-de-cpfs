const pessoas = require('./database/pessoas.json');
const fs = require('fs');
const path = require('path');

console.table(pessoas);
let removerPessoaAPartirDaPosicao = 1;
let removerPessoaAteAPosicao = 2;
console.log(`Removendo a pessoa a partir da posição ${removerPessoaAPartirDaPosicao} até a posição: ${removerPessoaAteAPosicao}`);
pessoas.splice(removerPessoaAPartirDaPosicao, removerPessoaAteAPosicao);
console.log('-'.repeat(103));
console.log('Novo Array de Pessoas atualizado');
console.table(pessoas);

fs.writeFileSync(path.resolve('databse', 'pessoas.json'), JSON.stringify(pessoas,null,4));

