let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
 let res = document.getElementById('res')

let valores = []

// let verLista = valores.indexOf(num.value)


// function isNumero(n){
//     if(Number(n) >= 1 && Number(n) <= 100){
//         return true
//     }else{
//         return false
//     }
// }

// function inLista(l){
//     if(l.indexOF(num.value) != -1){
//         return true
//     }else{ 
//         return false
//     }
// }


function adicionar(){
    if (num.value >= 1  &&  num.value <= 100){
        //(!) significa NÃO
         valores.push(num.value) // push significa adicionar um valor no array
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado` 
     lista.appendChild(item)
     res.innerHTML = ' '  
    }else{
    alert("valor Invalido ou já encontrado na lista.")
}
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores a o componente')
}else{
    let total = valores.length
    var soma = 0

    for (var i =0; i< total; i++){
        soma += valores[i]
    }
    // var som = valores.reduce((accumulator,value) => accumulator + value,0)
    // console.log(som)

    let media = soma / total
    res.innerHTML = ' '
    res.innerHTML += `<p>Ao  total, temos ${total} números cadastrados </p>`
    res.innerHTML += `<p>O maior valor informado foi ${Math.max(...valores)}</p>`
    res.innerHTML += `<p>O maior menor informado foi ${Math.min(...valores)}</p>`
    res.innerHTML += `<p>A soma dos valores são ${soma}</p>`
    res.innerHTML += `<p>A media dos valores foi ${media}</p>`
    
}
}

