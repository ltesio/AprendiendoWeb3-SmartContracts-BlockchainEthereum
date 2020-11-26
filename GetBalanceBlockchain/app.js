
//Importar Modulo Web3
const Web3 = require('web3') 

//Instanciar objeto Web3 y conectarlo a la Red de Testing de Ethereum *Ropsten* con Nodo Infura.
const web3 = new Web3('https://ropsten.infura.io/v3/ce2763d3c6f34790bc364fab0f7ce37c')

//Address Ethereum 1
const address1 = '0xB481E2dDDa37a3Be6e2c1C2f152688Eb9895f1E1'
//Clave Privada 1
const address1Key = new Buffer.from('be4b5d37bee6cc0043a8248b77015b1b9c4971bb91431c15073c9266b8e6c280', 'hex')

//Address Ethereum 2
const address2 = '0x58c82E631Bec3D8b231fD4feEb9e3B102D11090D'
//Clave Privada 2
const address2Key = new Buffer.from('488fb8a1c88d3939b2bde8a7063e767e4880112b2ed1458063b85bc9bb1c9f43', 'hex')

//Leer Balance de una Address sobre la Blockchain Pública.
web3.eth.getBalance(address1, (err, balance) => {
    console.log(web3.utils.fromWei(balance, 'ether')) //Convertimos de Wei (unidad mínima de Ethereum) a Ether.
    //Verificar Saldo: https://ropsten.etherscan.io/address/0xB481E2dDDa37a3Be6e2c1C2f152688Eb9895f1E1
})
web3.eth.getBalance(address2, (err, balance) => {
    console.log(web3.utils.fromWei(balance, 'ether')) //Convertimos de Wei (unidad mínima de Ethereum) a Ether.
    //Verificar Saldo: https://ropsten.etherscan.io/address/0x58c82E631Bec3D8b231fD4feEb9e3B102D11090D
})
