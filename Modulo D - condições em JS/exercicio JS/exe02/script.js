function verificar(){

    const d = new Date();
    let year = d.getFullYear();
    

    var nascimento = document.getElementById("nascimento").value;
    var res = document.getElementById("resultado");

    var idade = year - nascimento;

    if(nascimento == 0 || nascimento > year){
        alert("[ERRO] Verifique novamente")
    }else{

        
        var fsex = document.querySelectorAll('input[type="radio"]');
        let genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >=0 && idade<10){
                 img.setAttribute('src', 'bebeMasc.jpg')
            }else if (idade <21){
                img.setAttribute('src', 'jovemMasc.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoMasc.jpg')
            }else{
                img.setAttribute('src', 'idosoMasc.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Feminino'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'bebeFemi.jpg')
            }else if (idade <21){
                img.setAttribute('src', 'jovemFemi.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoFemi.jpg')
            }else{
                img.setAttribute('src', 'idosoFemi.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `você é do gênero ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.width = '300px'
    }


}