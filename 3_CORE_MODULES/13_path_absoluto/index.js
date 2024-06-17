const path = require("path")

//path absoluto
console.log(path.resolve('text.txt')) // devolve o caminho exato do arquivo que eu desejar

//formar path
const midFolder = "relatorios"
const fileName = "gustavo.txt"

const finalPath = path.join("/", 'arquivos', midFolder, fileName)//criação do caminho do arquivo

console.log(finalPath)