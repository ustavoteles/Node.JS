//nome
//será passado o argumento chamado nome

console.log(process.argv)

//colocando o nome Gustavo ao lado do código
//node index.js nome=Gustavo
//esse módulo traz de volta 

/*
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\teles\\OneDrive\\Documentos\\projects\\Node\\2_FUNDAMENTOS\\4_ler_argumentos\\index.js',
  'nome=Gustavo'
  */

const args = process.argv.slice(2)
//aqui ele vai resgatar o terceiro indice (comeca do zero)
//e assim buscando o nome ="******"

console.log(args)

const nome = args[0].split("=")[1]

console.log(nome)

const idade = args[1].split("=")[1] //vai pegar o segundo argumento, nesse caso, idade

console.log(idade)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos`)

//aqui ele vai criar a variavel nome
//vai puxar do args, que foi a variavel criada com a função SLICE
//e cortar o que vem depois do "=" e o [1] ele busca o segundo elemento
//e assim trazendo o nome em string