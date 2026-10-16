const alunos = [
{nome:"Ana",media:8.5},
{nome:"Bruno",media:6},
{nome:"Carla",media:9},
{nome:"Davi",media:5.5}
]

const encontrar = alunos.find(
    aluno => aluno.media < 7
)
const some = alunos.some(
    aluno => aluno.media >= 9
)

const every = alunos.every(
    aluno => aluno.media >= 7
)

console.log(encontrar.nome);
console.log(some);
console.log(every);