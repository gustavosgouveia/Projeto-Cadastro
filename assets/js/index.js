let btn = document.querySelector(".fa-eye")

btn.addEventListener("click", ()=>{
  let inputSenha = document.querySelector("#senha")
  
  if(inputSenha.getAttribute("type") == "password"){
    inputSenha.setAttribute("type", "text")
  } else {
    inputSenha.setAttribute("type", "password")
  }
})
let form = document.getElementById("enterForm")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
window.location.href = "/assets/html/produtos.html"
})