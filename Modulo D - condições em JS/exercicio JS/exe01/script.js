
function carregar() {
    var msg = document.getElementById("msg")
    var horaAtual = new Date()
   var hora = String(horaAtual.getHours())

    msg.innerHTML = `Agora são ${hora} horas`

    var img = document.getElementById("imagem")

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#b4ebcb'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#2a363d'
    }





}