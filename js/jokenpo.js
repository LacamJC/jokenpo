var cont = 0
function jokenpo(x)
{
    let joao = Math.floor(Math.random() * 3) + 1
    let Alg = x
    let resultado = document.getElementById('resultado')
    let ganhador;
    let resComp;
    let resUsu;
    let tabela = document.getElementById('tbody')
  
    // console.log(joao)
    resultado.innerHTML = '<div id="loader" class="loader"></div>'
    switch (joao)
    {
        case 1:
            // console.log("PEDRA")
            joao = "PEDRA"
            break;
            case 2: 
                // console.log("PAPEL")
                joao = "PAPEL"
                break; 
                case 3: 
                    // console.log("TESOURA")
                    joao = "TESOURA"
                    break;
    }

    // console.log(`joao : ${joao}`)
    // console.log(`Alg : ${Alg}`)

    if(joao == Alg)
    {
        console.log("EMPATE")
        console.log(`joao : ${joao}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "Empate"

        resComp = "Empate"
        resUsu = "Empate"
    }
    
    // VITORIAS DO joao
    else if(joao == "PEDRA" && Alg == "TESOURA")
    {
        console.log("joao VENCEU")
        console.log(`joao : ${joao}`)
        console.log(`Alg : ${Alg}`)

        ganhador = "joao"
        resComp = "Vencedor"
        resUsu = "Perdedor"
    }else 

    if(joao == "TESOURA" && Alg == "PAPEL")
    {
        console.log("joao VENCEU")
        console.log(`joao : ${joao}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "joao"
        resComp = "Vencedor"
        resUsu = "Perdedor"
    }else 
    if(joao == "PAPEL" && Alg == "PEDRA")
    {
        console.log("joao VENCEU")
        console.log(`joao : ${joao}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "joao"
        resComp = "Vencedor"
        resUsu = "Perdedor"
    }


    
    // VITORIAS DO Alg
    else 
    if(joao == "PAPEL" && Alg == "TESOURA")
    {
        console.log("Alg VENCEU")
        console.log(`joao : ${joao}`)
        console.log(`Alg : ${Alg}`)

        ganhador = "Alg"
        resComp = "Perdedor"
        resUsu = "Vencedor"
    }
    if(joao == "TESOURA" && Alg == "PEDRA")
    {
        console.log("Alg VENCEU")
        console.log(`joao : ${joao}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "Alg"
        resComp = "Perdedor"
        resUsu = "Vencedor"
    }else 
    if(joao == "PEDRA" && Alg == "PAPEL")
    {
        console.log("Alg VENCEU")
        console.log(`joao : ${joao}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "Alg"
        resComp = "Perdedor"
        resUsu = "Vencedor"
    }


    setTimeout(function() {
        cont ++;
        resultado.innerHTML = `    <div class="alert alert-primary"><p>O vencedor foi : <strong>${ganhador}</strong></p><p>O Alg escolheu <strong>${Alg}</strong> e o joao escolheu <strong>${joao}</strong></p></div>`

        tbody.innerHTML += `<tr><th scope="row">${cont}</th><td>${resComp}</td><td>${resUsu}</td></tr> `
    }, Math.floor(Math.random() * 1000) + 100)
    

}
