const fs = require('fs')

console.log("Início")

fs.writeFileSync("arquivo.tx", "oi")
//método SINCRONO que fala pra execução parar e esperar a execução desse
// codigo ser concluido pra seguir o resto do programa 

console.log('Fim')
