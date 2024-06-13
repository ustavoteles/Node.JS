const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual a primeira nota? ',
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota? ',
        },
    ])
    .then((respostas) => {
        console.log(respostas)

        const media = (parseInt(respostas.p1) + parseInt(respostas.p2)) / 2

        console.log(`A média é: ${media}`)
    })
    .catch((err) => console.log(err))
//then é basicamente um entao, ou seja, ele vai continuar o codigo depois do inquirer
//catch serve pra imprimir um erro caso apareça erro

//BASICAMENTE AS PERGUNTAS ORIGINAM AS RESPOSTAS, SE CASO DER ERRO VAI PRO CATCH,
//SE TUDO OCORRER CERTO VAI PRO THEN