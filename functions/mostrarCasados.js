const pessoas = require('./database/pessoas.json');

const pessoasCasados = pessoas.filter((pessoa) => {
    return pessoa.casado == true;
});

console.table(pessoasCasados);