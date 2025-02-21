let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    document.getElementById("amigo").value = "";
    if (nome == "" || amigos.includes(nome)) {
        alert("Por favor, digite um nome ainda não adicionado no campo abaixo");
        return;
    }
    amigos.push(nome);
    console.log(amigos)
    exibirLista();
}

function exibirLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let amigo of amigos) {
        let mensagem = `<li>${amigo}</li>`;
        listaAmigos.innerHTML += mensagem;
        console.log(amigo)
    }
}
