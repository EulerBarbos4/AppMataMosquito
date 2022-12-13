let altura 
let largura 
let vidas = 1
let tempo = 60
let nivel = window.location.search
nivel = nivel.replace('?','')
let criaMosquitoTempo = 1500


if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}



function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
    tempo--

    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoRandomica(){

    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas>3){
            window.location.href = 'fim_jogo.html'
        }else{
            document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
        
    }
    
    let posicaoX = Math.floor(Math.random() * largura) -90
    let posicaoY = Math.floor(Math.random() * altura) -90

    posicaoX = posicaoX<0 ? 0 : posicaoX
    posicaoY = posicaoY<0 ? 0 : posicaoY

    //criando elemento html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        mosquito.src = 'imagens/mosquito_morto.png'
        setTimeout(function(){mosquito.remove()},50)
        
    }

    document.body.appendChild(mosquito)

}


function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1' 
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA' 
        case 1:
            return 'ladoB'
    }
}

function iniciarJogo(){
    let nivel = document.getElementById('nivel').value

    if(nivel === ''){
        window.alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = 'index.html?' + nivel
}




