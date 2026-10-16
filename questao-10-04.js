const alunos = [
{nome:"ana",media:8.5},
{nome:"bruno",media:6},
{nome:"carla",media:7.5},
{nome:"davi",media:9}
];

const listarAprovados = (lista, mediamin = 7) => 
    lista
.filter(aluno => aluno.media >= mediamin)
.map(aluno => aluno.nome.toUpperCase());

console.log(listarAprovados(alunos));
console.log(listarAprovados(alunos, 8));