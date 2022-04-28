var res = document.getElementById('resposta')

function contar(){

var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('resposta')

var idInicio = Number(inicio.value)
var idFim = Number(fim.value)
var idPasso = Number(passo.value)

if(idPasso <= 0){
    alert("Passo invalido ! considerando PASSO 1")
    idPasso = 1
}

var c = idInicio
   if(idInicio == 0 || idFim == 0 || idPasso == 0){
       alert("[ERRO] algum campo sem dados !")

      
   }else if(idInicio < idFim){
    
    while(c <= idFim){
    
        res.innerHTML += "" + c + " - "
        c += idPasso
    }
   }else if(idInicio > idFim){

    while(c >= idFim){
    
        res.innerHTML += "" + c + " - "
        c -= idPasso

    }
   }

}

function limpar(){
    res.innerHTML = " "
}

