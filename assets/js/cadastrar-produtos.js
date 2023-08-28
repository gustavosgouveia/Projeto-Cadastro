let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página!")
    window.location.href = "../html/index.html"
}

 window.onload = ()=> {
    let produtos = JSON.parse(localStorage.getItem("dadosProduto"))
    if(produtos==null){
        produtos = [] 
    }
     const newId = produtos.length+1
     document.getElementById("idCodigo").value = newId
 }
 
 function produtoCadastrado(){
    window.location.href = "../html/produtos.html"
}

function salvar(){
    let idCodigo = document.getElementById("idCodigo")
    let nomeProduto = document.getElementById("nomeProduto")
    let precoCusto = document.getElementById("precoCusto")
    let precoVenda = document.getElementById("precoVenda")
    let quantidadeEstoque = document.getElementById("quantidadeEstoque")
    let unidadeMedida = document.getElementById("unidadeMedida")
    let informacoesAdicionais = document.getElementById("informacoesAdicionais")
    let barCode = document.getElementById("barCode")

    let dados = JSON.parse(localStorage.getItem("dadosProduto"))
    if(dados == null){
        localStorage.setItem("dadosProduto", "[]")
        dados = []
    }
    let auxRegistro = {
        id: idCodigo.value, 
        nome: nomeProduto.value,
        precoC: precoCusto.value,
        precoV: precoVenda.value,
        quantidade: quantidadeEstoque.value,
        unidade: unidadeMedida.value,
        informacoes: informacoesAdicionais.value,
        codigoBarra: barCode.value
    }
    dados.push(auxRegistro)
    localStorage.setItem("dadosProduto", JSON.stringify(dados))
}

function sair(){
    localStorage.removeItem("token")
    window.location.href = "../html/index.html"
}
function generateBarcode(code) {
    JsBarcode("#barcode", code, {
        format: "CODE128", 
        displayValue: true 
    });
}
