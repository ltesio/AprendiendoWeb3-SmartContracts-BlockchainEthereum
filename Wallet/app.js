
//Importar Web3
const Web3 = require('web3')
//Instanciar Web3
const web3 = new Web3() //no es necesario indicar el proveedor del nodo Infura porque no interactuamos con la blockchain

//Obtener un string aleatorio.
const stringAleatorio = web3.utils.sha3( Math.random(0, 1000000).toString(16) + web3.utils.randomHex(32) )
//Generar una Wallet - address pública y clave privada.
const wallet = web3.eth.accounts.create(stringAleatorio)
//0xb6D29042de35e5B862BFa0aB193E9D3B3A53Ec16
//0xb393f5fc4484e782e56dc61926a09cb35f59cd86931fa7380a4f39a203a59eff

//Encriptar clave privada para poder guardarla en una DB
const privateKeyEncrypted = web3.eth.accounts.encrypt(wallet.privateKey, '12345')
//Desencriptar clave privada
const privateKey = web3.eth.accounts.decrypt(privateKeyEncrypted, '12345')

//Mostrar resultados
console.log(wallet)
console.log(privateKeyEncrypted)
console.log(privateKey)
