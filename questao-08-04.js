function aplicarOperacao (a, b, operacao) {
    return operacao (a, b);
}

const soma = (x, y) => x + y;
const multiplicacao = (x, y) => x * y;

const a = 8;
const b = 2;


console.log(aplicarOperacao(a, b, soma));
console.log(aplicarOperacao(a, b, multiplicacao));
console.log(aplicarOperacao(a, b, (x, y) => x - y));