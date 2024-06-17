const path = require('path') //chamando o modulo path

const customPath = "/relatorios/gustavo/relatorio1.pdf"


console.log(path.dirname(customPath))//caminho do arquivo
console.log(path.basename(customPath))//basename = nome do arquivo
console.log(path.extname(customPath))//extensão do arquivo ex: .pdf