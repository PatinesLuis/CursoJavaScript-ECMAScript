let num = [5,2,9,3,4]
num.push(8)
num.sort() // vai colocar o array em ordem crescente

console.log("dados do vetor: " +num)

console.log(`O vetor tem ${num.length} posições`)
console.log(num[1]) //o segundo valor do vetor
console.log("====================")

for(let pos = 0; pos <num.length; pos++){
    console.log(num[pos])
}

console.log("===============")


for(let cont in num){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}

console.log("=============")
var arr = [1,5,3,5,4]
var soma = 0

    for (var i =0; i< arr.length; i++){
        soma += arr[i]
    }

console.log(soma)
