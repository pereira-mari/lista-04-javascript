const recebido = '{"produto":"Monitor", "preco":900, "estoque":4}';

let  objeto = JSON.parse(recebido);
objeto.preco = objeto.preco - objeto.preco*0.1;
objeto.estoque = objeto.estoque - 1;

const final = JSON.stringify(objeto);

console.log(objeto);
console.log(final);
console.log(typeof(final));