const btn = document.getElementById("reset");
const tabela = document.getElementById("tbody");
btn.addEventListener('click', ()=>{
    console.log("CLICADO");
    tabela.innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
})