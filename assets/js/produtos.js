let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logged')
logado.innerHTML = `Seja bem-vindo(a), ${userLogado.user}!`

if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página!")
    window.location.href = "../html/index.html"
}

function sair(){
    localStorage.removeItem("token")
    window.location.href = "../html/index.html"
}