const _ = require("lodash")
//vai aparecer que nao foi possivel encontrar o lodash
//pq o lodash é diferente, ele nao sera executado com comandos e sim com os arquivos dele

//alguns pacotes nao precisam fazer isso
//no caso do lodash, precisa linkar no terminal "npm link lodash"
//MAS O PROJETO NAO PRECISA DO LODASH.

const arr = [1, 2, 2, 3, 3, 4, 5]

console.log(_.sortedUniq(arr))//metodo que separa os unicos. nao vai ter repetidos

