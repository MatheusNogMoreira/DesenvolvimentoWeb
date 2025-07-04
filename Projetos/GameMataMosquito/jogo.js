var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search //recupera ?dificuldade
var criaMosquitoTempo = 1500
nivel.replace('?','')

if(nivel==='Normal'){
    criaMosquitoTempo = 1500

}else if(nivel==='Dificil'){

    criaMosquitoTempo = 1000

}else if(nivel==='Muito Difícil'){
    criaMosquitoTempo = 750

}

function atualizaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura+','+largura)
}

atualizaTamanho()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoRandom(){

    //remover o mosquito anterior - caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            //redirecionar
            window.location.href = 'fim_de_jogo.html'
            
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //criar elemento html

    if(posicaoX !=0 && posicaoY !=0){
        var mosquito = document.createElement('img')

        mosquito.src='imagens/mosca.png'
        mosquito.className = tamanhoAleatorio() + ladoAleatorio()//aplicar css
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        //gerar apenas um
        mosquito.id = 'mosquito'
        mosquito.onclick = function(){
            this.remove()
        }
    
        document.body.appendChild(mosquito)

    }
    

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return ' mosquito1 '
        case 1:
            return ' mosquito2 '
        case 2:
            return ' mosquito3 '
            
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return ' ladoA '
        case 1:
            return ' ladoB '
    }

}
