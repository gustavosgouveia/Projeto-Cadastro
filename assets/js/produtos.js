let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logged')
logado.innerHTML = `Seja bem-vindo(a), ${userLogado.user}!`

if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página!")
    window.location.href = "../html/index.html"
}


document.getElementById("idCodigo").innerHTML = JSON.parse(localStorage.getItem("dadosProduto"))
function novoProduto(){
    window.location.href = "../html/cadastrar-produtos.html"
}

function sair(){
    localStorage.removeItem("token")
    window.location.href = "../html/index.html"
}