var cont = 0
function jokenpo(x)
{
    let voce = Math.floor(Math.random() * 3) + 1
    let Alg = x
    let resultado = document.getElementById('resultado')
    let ganhador;
    let resComp;
    let resUsu;
    let tabela = document.getElementById('tbody')
  
    // console.log(voce)
    resultado.innerHTML = '<div id="loader" class="loader"></div>'
    switch (voce)
    {
        case 1:
            // console.log("PEDRA")
            voce = "PEDRA"
            break;
            case 2: 
                // console.log("PAPEL")
                voce = "PAPEL"
                break; 
                case 3: 
                    // console.log("TESOURA")
                    voce = "TESOURA"
                    break;
    }

    // console.log(`voce : ${voce}`)
    // console.log(`Alg : ${Alg}`)

    if(voce == Alg)
    {
        console.log("EMPATE")
        console.log(`voce : ${voce}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "Empate"

        resComp = "Empate"
        resUsu = "Empate"
    }
    
    // VITORIAS DO voce
    else if(voce == "PEDRA" && Alg == "TESOURA")
    {
        console.log("voce VENCEU")
        console.log(`voce : ${voce}`)
        console.log(`Alg : ${Alg}`)

        ganhador = "voce"
        resComp = "Vencedor"
        resUsu = "Perdedor"
    }else 

    if(voce == "TESOURA" && Alg == "PAPEL")
    {
        console.log("voce VENCEU")
        console.log(`voce : ${voce}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "voce"
        resComp = "Vencedor"
        resUsu = "Perdedor"
    }else 
    if(voce == "PAPEL" && Alg == "PEDRA")
    {
        console.log("voce VENCEU")
        console.log(`voce : ${voce}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "voce"
        resComp = "Vencedor"
        resUsu = "Perdedor"
    }


    
    // VITORIAS DO Alg
    else 
    if(voce == "PAPEL" && Alg == "TESOURA")
    {
        console.log("Alg VENCEU")
        console.log(`voce : ${voce}`)
        console.log(`Alg : ${Alg}`)

        ganhador = "Alg"
        resComp = "Perdedor"
        resUsu = "Vencedor"
    }
    if(voce == "TESOURA" && Alg == "PEDRA")
    {
        console.log("Alg VENCEU")
        console.log(`voce : ${voce}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "Alg"
        resComp = "Perdedor"
        resUsu = "Vencedor"
    }else 
    if(voce == "PEDRA" && Alg == "PAPEL")
    {
        console.log("Alg VENCEU")
        console.log(`voce : ${voce}`)
        console.log(`Alg : ${Alg}`)
        ganhador = "Alg"
        resComp = "Perdedor"
        resUsu = "Vencedor"
    }


    setTimeout(function() {
        cont ++;
        resultado.innerHTML = `    <div class="alert alert-primary"><p>O vencedor foi : <strong>${ganhador}</strong></p><p>O Alg escolheu <strong>${Alg}</strong> e o voce escolheu <strong>${voce}</strong></p></div>`

        tbody.innerHTML += `<tr><th scope="row">${cont}</th><td>${resComp}</td><td>${resUsu}</td></tr> `
    }, Math.floor(Math.random() * 1000) + 100)
    

}
