const pessoas = require('./database/pessoas.json');
const fs = require('fs');
const path = require('path');

const alterarDadosPessoa = (index, nome, cpf, casado, filhos) => {
    const novosDados = {
        nome: nome,
        cpf: cpf,
        casado: casado,
        filhos: filhos
    }

    const novosDadosAlterados = pessoas.splice(pessoas[index] = novosDados);
    fs.writeFileSync(path.resolve('databse', 'pessoas.json'), JSON.stringify(novosDadosAlterados, null, 4));
    console.log('Atualizando os dados do Array de Pessoas...');

    setTimeout(() => {
        console.log('-'.repeat(103));
        console.log(`Inserindo os dados na ${index}º posição do Array de Pessoas:\nNome: ${novosDados.nome}\nCPF: ${novosDados.cpf}\nCasado: ${novosDados.casado}\nFilhos: ${novosDados.filhos}`);
        console.log('-'.repeat(103));
        console.log('Array de Pessoas atualizado com Sucesso');
    }, 3000);
}

console.table(pessoas);
console.log(`Digite a função: alterarDadosPessoas()\nPasse como parâmetros os dados que deseja alterar na seguinte ordem: Posição do Array, Nome, CPF, Casado, Filhos.\nNa legenda abaixo, estão os tipos de dados de cada parâmetro. \n\nPosição do Array: Number,\nNome: ${typeof pessoas[0].nome},\nCPF: ${typeof pessoas[0].cpf},\nCasado: ${typeof pessoas[0].casado},\nFilhos: ${typeof pessoas[0].filhos}\nExemplo: alterarDadosPessoas(0, 'Novo Nome', '000.000.000-00', true, ['Filho1, 'Filho2']) `);
console.log('-'.repeat(103));