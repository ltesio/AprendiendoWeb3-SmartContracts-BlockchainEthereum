
//Instalar por terminal
//npm init
//npm i web3 ethereumjs-tx solc@0.5.0

const Web3 = require('web3') //Importar Modulo Web3.
const EthereumTx = require('ethereumjs-tx').Transaction //Importar Modulo para hacer transacciones de Ethereum en .js
const Solc = require('solc') //Importar Solidity.
const fs = require('fs') //Importamos fs para poder trabajar con nuentro archivo de solidity.

//Instanciar objeto Web3 y conectarlo a la red de testing Ropsten con nodo Infura.
const web3 = new Web3('https://ropsten.infura.io/v3/ce2763d3c6f34790bc364fab0f7ce37c')

//Address Owner (Dueño del Contrato).
const address1 = '0xB481E2dDDa37a3Be6e2c1C2f152688Eb9895f1E1'
const address1Key = new Buffer.from('be4b5d37bee6cc0043a8248b77015b1b9c4971bb91431c15073c9266b8e6c280', 'hex')

//Leemos nuestro Contrato de modo Sincronico y lo convertimos a string.
const content = fs.readFileSync('Cars.sol').toString() 
//Objeto de configuracion del compilador.
const objectSolc = {
    language: 'Solidity',
    sources: {
        'cars': {
            content: content
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}
//Obtener el output del Compilador.
const output = JSON.parse(Solc.compile(JSON.stringify(objectSolc)))
//ByteCode.
const byteCodeContract = output.contracts.cars.Cars.evm.bytecode.object
//Transacción para Deploy del Smart Contract.
web3.eth.getTransactionCount(address1, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasPrice: web3.utils.toHex(web3.utils.toWei('120','gwei')),
        gasLimit: web3.utils.toHex(1000000),
        to: null,
        data: '0x' + byteCodeContract
    }  
    
    //Instanciamos la transaccion de Ethereum.
    const tx = new EthereumTx(txObject, { 'chain' : 'ropsten' })
    //Firmamos con clave privada nuestra transaccion.
    tx.sign(address1Key)
    //Serializamos transaccion para poder enviarlo a la Blockchain de Ethereum.
    const serializedTx = tx.serialize().toString('hex')
    //Enviamos la transaccion firmada. ('0x' indica que se envia en formato hexadecimal).
    web3.eth.sendSignedTransaction('0x' + serializedTx).on('receipt', receipt => {
        console.log('Contrato subido: ' + receipt.contractAddress)
    })

    //Deploy del Contrato en Blockchain Ethereum Ropsten: 
    //0x5C710D0C0478aAEd1A0a5E41E85BefbB8bA278dF

    //Verificar en: https://ropsten.etherscan.io/address/0x5c710d0c0478aaed1a0a5e41e85befbb8ba278df
    
    //Pruebas del contrato sobre la blockchain con Remix (Injected Web3).
})
