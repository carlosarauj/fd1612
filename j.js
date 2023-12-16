function carregar(){
    var bom = document.getElementById('bom')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora > 0 && hora < 12){
        bom.innerHTML = 'bom dia'
        img.src = '../manha.jpeg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18 ){
        //Boa tarde
        img.src = '../tarde.jpeg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = '../noite.jpeg'
        document.body.style.background = '#515154'
    }
    }