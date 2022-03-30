var horaAtual = new Date()

 var hora = String(horaAtual.getHours())


console.log(`Agora são exatamente ${hora} horas.`)

if(hora <12){
    console.log("BOM DIAA")
}else if(hora <=18){
    console.log("BOA TARDE")
}else{
    console.log("BOA NOITE")
}