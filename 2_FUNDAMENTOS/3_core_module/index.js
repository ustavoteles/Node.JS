const path = require('path') //chamando a variavel com o mesmo nome do modulo
//path é o modulo do node que esta sendo chamado
const extension = path.extname("arquivo.php")
//extname vê o nome da extensao do arquivo

console.log(extension)