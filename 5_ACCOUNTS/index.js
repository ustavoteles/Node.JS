//modulos externos
import chalk from 'chalk';
import inquirer from 'inquirer';


//modulos internos
import fs from 'fs';
import { get } from 'http';


operation()//chamando a função pra ja aparecer pro usuário

//função operation pro usuário começar o sistema
//ESSA FUNÇÃO PRECISA COMEÇAR JUNTO COM O PROGRAMA PRO USUÁRIO

function operation() {

    inquirer.prompt([{//prompt faz com que o usuario possa escolher opções
        type: 'list', //tipo: lista
        name: 'action', //ação que o usuario vai fazer
        message: 'O que você deseja fazer?', //mensagem que vai aparecer
        choices: [ //escolhas
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ],
    },
    ])
        .then((answer) =>//solução que o usuário escolhe  //answer=resposta do usuario
        {
            const action = answer['action']//puxando a resposta do usuário
            console.log(action)
            if (action === 'Criar conta') {//Chamando a mensagem de ciração de conta
                createAccount()
            } else if (action === 'Depositar') { //caso o usuario escolher depositar
                deposit()//nome da função depositar
            } else if (action === 'Consultar saldo') { //caso o usuario queira consultar saldo
                getAccountBalance()
            } else if (action === 'Sacar') { // caso o usuario queira sacar
                withdraw()//retirar
            } else if (action === 'Sair') {//caso o usuario queira sair
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit()//encerra a execução
            }
        })
        .catch((err => console.log(err)))//erro
}

//CREATE AN ACCOUNT
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir: '))
    buildAccount()//chamando o método que cria a conta

}

//MÉTODO QUE REALMENTE CRIA A CONTA

function buildAccount() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Digite um nome pra sua conta:',
            },
        ])
        .then((answer) => {

            //then vai executar depois, nesse caso vai encapsular 
            //a resposta em answer que é a resposta do ususário
            const accountName = answer['accountName']//variavel de que puxa o nome

            console.info(accountName)//Console.info imprime como mensagem informativa

            //criar algo pra registrar as contas
            if (!fs.existsSync('accounts')) {//se accounts nao existir
                fs.mkdirSync('accounts')//crie um diretorio accounts
            }

            if (fs.existsSync(`accounts/${accountName}.json`)) {//se já existir com um nome que ja tenha
                console.log(chalk.bgRed.black('Está conta já existe, escolha outro nome'))

                buildAccount()//Vai mandar o usuário escolher outro nome por que ja esta sendo usado 
                return // pra ENCERRAR quando chamar o buildaccount
                //quando acontece o erro tem que chamar um return 
                //pq se nao ele ia tentar criar e tentar dar continuidade no codigo.
            }

            fs.writeFileSync(`accounts/${accountName}.json`,
                '{"balance": 0}',//formatacao do json
                function (err) {
                    console.log(err)
                },
            )
            //TUDO ESTA SENDO SINCRONO PRA RESPEITAR A ORDEM DO PROGRAMA

            console.log(chalk.green('Parabéns, a sua conta foi criada!!'))
            operation()//usuario escolhe a proxima operação
        })
        .catch((err) => console.log(err))
}

//add an amount to user account
function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']//puxando o account name

            //verify if account exists
            if (!checkAccount(accountName)) { //caso seja false
                return deposit()//pra retornar a função deposit e pedir o nome novamente
            }

            inquirer.prompt([//requerimento pra saber quando o Usuario deseja depositar
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar?'
                },
            ]).then((answer) => {

                const amount = answer['amount']

                //add an amount
                addAmount(accountName, amount)


            }).catch(err => console.log(err))

        }).catch(err => console.log(err))

}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false//retornar falso e sai da função
    }

    return true
}

function addAmount(accountName, amount) {

    const accountData = getAccount(accountName)

    if (!amount) {//se nao tiver amount
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'),
        )
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
    //balance do accountData e passar pra float (esta em texto)

    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    ) //criar arquivo de balance e transformar em string

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`)
    )

    operation()
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {//ler arquivo e transformar em JSON
        encoding: 'utf8',//padrao de arquivo usado pelo brasil
        flag: 'r'//r apenas read
    })

    return JSON.parse(accountJSON)//o arquivo acima esta em texto, sera passado para JSON
}

//show account balance
function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?',
        },
    ]).then((answer) => {
        const accountName = answer['accountName']

        //verify if account exists

        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(
            `Olá o saldo da sua conta é de R$${accountData.balance}`,
        ),
        ),
            operation()
    }).catch((err) => console.log(err))
}

//withdraw an amount from user account

function withdraw() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?',
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return withdraw()//se caso nao exista vai repetir o processo
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }
        ]).then((answer) => {
            const amount = answer['amount']

            removeAmount(accountName, amount)

        }).catch((err) => console.log(err))

    }).catch(err => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) { //nao tiver nada
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!!'))
        return withdraw()
    }

    if (accountData.balance < amount) //se o valor do amount for menor que o quanto tem em saldo
    {
        console.log(chalk.bgRed.black('Valor indisponível'))
        return withdraw()//volta pro saque
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),//transformando novamente em string
        function (err) {
            console.log(err)
        },
    )
    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta! `),
    )
    operation()
}
