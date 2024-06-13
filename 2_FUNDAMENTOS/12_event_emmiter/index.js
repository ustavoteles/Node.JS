const EventEmitter = require('events')

const eventEmitter = new EventEmitter() //instanciar o módulo acima criando uma classe.

eventEmitter.on('start', () => {
    console.log("Durante")
})

console.log('Antes')

eventEmitter.emit('start')//ativando o eventEmit usando o emit

console.log('Depois')

//usado para criação de um evento customizado para a criação de uma mensagem de erro, por exemplo

//parece com o EventListener