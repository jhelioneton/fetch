function retornoPromessaFetch(resposta) {
    let promessaBody = resposta.json();
    return promessaBody;
}

function retornoPromessaBody(body) {
    body.forEach(function (pessoa) {
        console.log(pessoa);
        lista.innerHTML = lista.innerHTML + "<li>" + pessoa.nome + "</li>";
    });
}

function atualizar() {
    let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");
    promessa.then(retornoPromessaFetch).then(retornoPromessaBody);
}

function adicionar() {
    let nomeDaPessoa = nome.value
    console.log(nomeDaPessoa)

    let requestPost = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ nome: nomeDaPessoa }),
    };

    fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa", requestPost).then(function (resposta) {
        console.log(resposta)
    });
}
