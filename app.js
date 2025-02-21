let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    document.getElementById("amigo").value = "";
    if (nome == "" || amigos.includes(nome)) {
        alert("Por favor, digite um nome ainda não adicionado no campo abaixo");
        return;
    }
    amigos.push(nome);
    exibirLista();
}

function exibirLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let amigo of amigos) {
        let mensagem = `<li>${amigo}</li>`;
        listaAmigos.innerHTML += mensagem;
    }
}

function sortearAmigo() {
    let sorteado = amigos[parseInt(Math.random() * amigos.length)]
    if (amigos.length == 0) {
        alert("Por favor, adicione um nome antes de sortear");
        return;
    }
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    mensagem = `O amigo secreto sorteado é: ${sorteado}`
    resultado.innerHTML = mensagem
}