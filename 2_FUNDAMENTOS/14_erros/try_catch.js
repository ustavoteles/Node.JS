const x = 10

try {

    x = 2

    //VAI DAR RUIM PQ UMA CONSTANTE NAO PODE SER INTERPOLADA

} catch (err) {

    console.log(`Erro: ${err}`)
}

//Erro: TypeError: Assignment to constant variable.
