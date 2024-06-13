//mais de um valor
const x = 10
const y = 'Gustavo'
const z = [1, 2]

console.log(x, y, z)

//contagem de impressões

console.count(`O valor de x é: ${x},contagem`) //mesma função do log, imprime valores
console.count(`O valor de x é: ${x},contagem`)//porém, se colocar mais de uma vez ele faz a contagem
console.count(`O valor de x é: ${x},contagem`)
console.count(`O valor de x é: ${x},contagem`)

//variavel entre string

console.log("O nome é %s, ele é programador", y)//"%s" quer dizer que é uma string e ta esperando o valor dela

//limpar o console

setTimeout(() => { //set time out, executa apos um tempo
    console.clear()
}, 2000//executa apos 2000 segundos

)