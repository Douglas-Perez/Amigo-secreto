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
}
