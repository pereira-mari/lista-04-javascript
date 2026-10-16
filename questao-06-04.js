const usuario1 = " Maria Clara Souza ";
const usuario2 = "JOAO LIMA";

function criarUsuario (nomeCompleto) {
    return nomeCompleto
    .trim()
    .toLowerCase()
    .split(" ")
    .join(".");
}

console.log(criarUsuario(usuario1));
console.log(criarUsuario(usuario2));