const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)//variavel nova ja utilizando o 
//metodo url com o metodo URL(url em maiusculo) passando o endereço(address)


//extraindo a hrl
console.log(parsedUrl.host)//extraindo o host da passedUrl
console.log(parsedUrl.pathname)//extraindo o pathname da passedUrl
console.log(parsedUrl.search)//extraindo o search da passedUrl
console.log(parsedUrl.searchParams)//extraindo os parametros (searchParams) da passedUrl 
console.log(parsedUrl.searchParams.get('produtos'))//utilizando um metodo get 
//e tira justamente o valor de produtos