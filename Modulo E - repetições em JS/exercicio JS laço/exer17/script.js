function gerarTabuada(){
    let txtnum = document.getElementById('num')
    let res = document.getElementById('tab')

    var num = Number(txtnum.value)

    if(num == 0){
        alert("Digite um numero diferente de 0")
    }else{

        let c = 0
    res.innerHTML = ' '
    while(c<=10){
        let item = document.createElement('option')
        item.text = `${num} X ${c} = ${num*c}`
        item.value = 'res${c}' // adicionar valor nos options para usar em outra linguagem(php)
        res.appendChild(item)
        
        c++
    }
    }

    

}
