const carrinho = [
{item:"Teclado",
preco:150,quantidade:1},
{item:"Mouse",
preco:80,quantidade:2},
{item:"Cabo USB",
preco:25,quantidade:3}
]

const valorTotal = carrinho.reduce (
    (acumulador, valor) => acumulador + valor.preco*valor.quantidade, 0
);

console.log(valorTotal);
