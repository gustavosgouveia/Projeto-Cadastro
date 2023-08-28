let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logged')
logado.innerHTML = `Seja bem-vindo(a), ${userLogado.user}!`

if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página!")
    window.location.href = "../html/index.html"
}


/*document.getElementById("idCodigo").innerHTML = JSON.parse(localStorage.getItem("dadosProduto"))*/

const loadProduct = ( ) =>{
  let produtos = JSON.parse(localStorage.getItem("dadosProduto"))
  if(produtos == null){
    produtos = []
  }
  let tableBody = document.getElementById("tableBody")
  let html = ""
  produtos.forEach((v)=> {
    html+=`
     <tr class="custom-table">
        <td>${v.id}</td>
        <td>${v.nome}</td>
        <td> ${v.precoC}</td>
        <td> ${v.precoV}</td>
        <td> ${v.quantidade}</td>
        <td> ${v.unidade}</td>
        <td> ${v.codigoBarra || ""}</td>
        <td><button class="delete" onclick="remover(${v.id})">Deletar</button></td>
    </tr>`
  })
  tableBody.innerHTML = html
}
window.onload = loadProduct

function remover(id){
 let produtos = JSON.parse(localStorage.getItem("dadosProduto"))
 if(produtos == null){
    produtos = []
 }
 let newProdutos = produtos.filter((v) => {
    if(v.id != id){
        return true
    }else{
        return false
    }
 })
 localStorage.setItem("dadosProduto", JSON.stringify(newProdutos))
 loadProduct()
} 


function novoProduto(){
    window.location.href = "../html/cadastrar-produtos.html"
}

function sair(){
    localStorage.removeItem("token")
    window.location.href = "../html/index.html"
}