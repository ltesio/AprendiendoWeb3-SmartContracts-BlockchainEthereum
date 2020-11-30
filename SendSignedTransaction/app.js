//---- Como Firmar Transacciones con Web3.js y Ethereumjs-tx ----

//Importar Modulo Web3
const Web3 = require('web3') 
//Importar Modulo para hacer transacciones de Ethereum en .js
const EthereumTx = require('ethereumjs-tx').Transaction 

//Instanciar objeto Web3 y conectarlo a la red de testing Ropsten con nodo Infura.
const web3 = new Web3('https://ropsten.infura.io/v3/ce2763d3c6f34790bc364fab0f7ce37c')

//Address Ethereum 1
const address1 = '0xB481E2dDDa37a3Be6e2c1C2f152688Eb9895f1E1'
//Clave Privada 1
const address1Key = new Buffer.from('be4b5d37bee6cc0043a8248b77015b1b9c4971bb91431c15073c9266b8e6c280', 'hex')

//Address Ethereum 2
const address2 = '0x58c82E631Bec3D8b231fD4feEb9e3B102D11090D'
//Clave Privada 2
const address2Key = new Buffer.from('488fb8a1c88d3939b2bde8a7063e767e4880112b2ed1458063b85bc9bb1c9f43', 'hex')

//Envolver transacciones con getTransactionCount para llevar un contador de transacciones hechas con la misma Address.
web3.eth.getTransactionCount(address2, (err, txCount) => {
    //Empaquetar transacciones
    const rawTx = {
        nonce: web3.utils.toHex(txCount), //Contador.
        gasPrice: web3.utils.toHex(web3.utils.toWei('36','gwei')), //Precio del GAS a pagar.
        gasLimit: web3.utils.toHex(50000), //GAS limite que aceptamos consumir.
        to: address1, //Address destino.
        value: web3.utils.toHex(1900000000000000000) //Valor a enviar expresado en Wei.
    }

    //Instanciar transacción en Ethereum.
    const tx = new EthereumTx(rawTx, { 'chain' : 'ropsten' })
    //Firmar transaccion con clave privada del emisor.
    tx.sign(address2Key) 
    //Sereializar transaccion para poder enviarlo a un nodo ethereum.
    const serializedTx = tx.serialize().toString('hex')
    //Enviar transaccion firmada al nodo Ethereum Infura.
    web3.eth.sendSignedTransaction('0x' + serializedTx).on('receipt', console.log);
    
})
