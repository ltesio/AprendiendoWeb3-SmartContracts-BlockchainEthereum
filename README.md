**Blockchain Ethereum (Smart Contract)**
# Aprendiendo Web3
Vas a encontrar varios ejemplos de proyectos Node.js, con el fin de enseñar el uso de la Librería Web3.js para conectar nuestras App o DApp con los Contratos Inteligentes desarrollados sobre la Blockchain de Ethereum. Cada línea de código esta explicada en español y a modo educativo. Para cada proyecto js compartido, se verifico el correcto funcionamiento de cada una de las funciones mencionadas más adelante en este documento.

### Herramientas
**Web3.js**

Librería Java Script que permite conectar una aplicación con los contratos inteligentes de la Blockchain de Ethereum. Documentación: [Web3.js](https://web3js.readthedocs.io/en/v1.3.0/)

**Visual Studio Code**

Elegimos este editor de código, para escribir nuestra app, pero pueden usar el de su agrado. Software: [Descargar](https://code.visualstudio.com/)

**Billetera MetaMask**

Necesitamos instalar la extensión de Metamask en nuestro navegador. Software: [Descargar](https://metamask.io/).
Debemos crearnos nuestras address sobre la red testnet "Ropsten" para poder realizar las pruebas.

**Faucet Ropsten**

Las adderess creadas sobre Metamask tiene balance cero. Debemos conseguir saldo en Ether Gratuito de la red de testing Ropsten para poder realizar las pruebas de las aplicaciones. Para ello les dejo 3 sitio útiles: [Opción 1](https://faucet.ropsten.be/) - [Opción 2](https://faucet.dimensions.network/) - [Opción 3](https://faucet.kyber.network/).

**Explorador Blockchain**

Para poder verificar todas nuestras transacciones sobre la Blockchain de Testing Ropsten. [Etherscan Ropsten](https://ropsten.etherscan.io/).

**Nodo Blockchain**

Para poder interactuar con la Blockchain de Ethereum, necesitamos hacerlo a través de un NODO. Para este caso usamos Infura que te permite crear tu propio nodo de modo gratuito, tanto para las redes testnet como la mainnet (Cantidades de transacciones limitadas en su versión gratuita). [Infura](https://infura.io/dashboard).

**Librería EthereumJs-tx**

Librería para poder realizar transacciones sobre la Blockchain de Ethereum. [EthereumJs-tx](https://github.com/ethereumjs/ethereumjs-tx).

**Precio del GAS de Ethereum**

Ver en tiempo real el precio de GAS sobre la Blockchain de Ethereum. [Precio GAS](https://ethgasstation.info/).

**Conversor de unidades de ETH**

El siguiente enlace te permite convertir facilmente en cualquiera de las unidades en las que trabaja Ethereum. [Conversor](http://eth-converter.com/index.html).


### Mis Proyectos Web3
**GetBalanceBlockchain/app.js**

¿Cómo arrancamos desde cero?
1) Ingresar a "Visual Studio Code" y abrir el directorio en el cual vamos a trabajar. En nuestro caso: GetBalanceBlockchain.
2) Abrir una terminal o consola para este directorio e instalar web3. Comando: npm i web3 (Esto nos crear una carpeta "node_modules" y un archivo "package-lock.json").
3) Dentro del directorio "GetBalanceBlockchain", crear un archivo .js. En nuestro caso: app.js (Aquí escribimos nuestro código web3).
4) Ejecutamos nuestra aplicación por terminal. Comando: node app.js

En esta aplicación vas a encontrar la funcionalidad para poder leer el balance de una Address pública sobre la Blockchain Testnet Ropsten de Ethereum.
Las funciones desarrolladas permiten:
1) Ver el balance de una Address.

Conceptos aprendidos:
- *const web3 = new Web3('...')*: Como instanciar y conectar nuestra app con un nodo de la blockchain testnet Ropsten de Ethereum.
- *web3.eth.getBalance()*: Como obtener el balance total de una dirección pública de Ethereum.
- *web3.utils.fromWei(balance, 'ether')*: Como convertir de Wei (unidad mínima) a Ether.

------------------------------------
**SendSignedTransaction/app.js**

¿Cómo arrancamos desde cero?
1) Ingresar a "Visual Studio Code" y abrir el directorio en el cual vamos a trabajar. En nuestro caso: SendSignedTransaction.
2) Abrir una terminal o consola para este directorio e instalar web3. Comando: npm i web3 (Esto nos crear una carpeta "node_modules" y un archivo "package-lock.json").
3) En el mismo directorio, instalar ethereumjs-tx: npm install ethereumjs-tx (Librería para realizar transacciones sobre Ethereum).
4) Dentro del directorio "SendSignedTransaction", crear un archivo .js. En nuestro caso: app.js (Aquí escribimos nuestro código web3).
5) Ejecutamos nuestra aplicación por terminal. Comando: node app.js

En esta aplicación vas a encontrar la funcionalidad para poder realizar una transacción, o sea, poder enviar saldo desde una Address a otra sobre la Blockchain Testnet Ropsten de Ethereum.
Las funciones desarrolladas permiten:
1) Llevar el NONCE de una Address (Contador de transacciones de una Address).
2) Realizar una transacción firmada por la red (Enviar saldo).

Conceptos aprendidos:
- *web3.eth.getTransactionCount(address, (err, NONCE)*: Permite llevar la cuenta de las transacciones realizadas con una misma Address.
- *web3.eth.sendSignedTransaction()*: Como enviar una transacción empaquetada, firmada y serializada a la red de Testnet Ropsten de Ethereum.

------------------------------------
**EventBAT/app.js**

¿Cómo arrancamos desde cero?
1) Ingresar a "Visual Studio Code" y abrir el directorio en el cual vamos a trabajar. En nuestro caso: EventBAT.
2) Abrir una terminal o consola para este directorio e instalar web3. Comando: npm i web3 (Esto nos crear una carpeta "node_modules" y un archivo "package-lock.json").
3) Dentro del directorio "EventBAT", crear un archivo .js. En nuestro caso: app.js (Aquí escribimos nuestro código web3).
4) Ejecutamos nuestra aplicación por terminal. Comando: node app.js

En esta aplicación vas a encontrar la funcionalidad para poder conectarnos a cualquier Smart Contract e interactuar con el mismo. En este caso puntual, nos conectamos al contrato del Token BAT (Basic Attention Token) sobre la Blockchain Mainnet de Ethereum. Obtuvimos los datos desde Etherscan: [Datos del Contrato BAT](https://etherscan.io/address/0x0d8775f648430679a709e98d2b0cb6250d2887ef#code). 
Las funciones desarrolladas permiten:
1) Instanciar un Smart Contract público productivo.
2) Leer eventos en tiempo real de un contrato.

Conceptos aprendidos:
- *web3.eth.getBlockNumber()*: Permite obtener el último bloque minado.
- *contractBAT.getPastEvents('Event', { filter: {} }*: Nos permite filtrar desde la Blockchain, uno o todos los Eventos en un rango de Bloques.

------------------------------------
**DeploySmartContract/app.js**

¿Cómo arrancamos desde cero?
1) Ingresar a "Visual Studio Code" y abrir el directorio en el cual vamos a trabajar. En nuestro caso: DeploySmartContract.
2) Abrir una terminal o consola para este directorio e inicializar un proyecto NPM. Comando: npm init (Esto nos crear un archivo "package.json").
3) Luego instalar lo necesario para manipurar Web3 en JavaScript, transacciones de Ethereum y Smart Contract en Solidity. Comando: npm i web3 ethereumjs-tx solc@0.5.0 (Esto nos crear una carpeta "node_modules" y un archivo "package-lock.json").
4) Dentro del directorio "DeploySmartContract", crear un archivo .js. En nuestro caso: app.js (Aquí escribimos nuestro código web3).
5) Dentro del mismo directorio, crear otro archivo .sol que contenga el Smart Contract que deseamos Deployar. En nuestro caso: Cars.sol (Solidity).
6) Ejecutamos nuestra aplicación por terminal. Comando: node app.js

En esta aplicación vas a encontrar la funcionalidad para poder realizar el DEPLOY de un Smart Contract con Web3. En este caso puntual, deployamos un contrato sobre la Blockchain de Testing "Ropsten" de Ethereum. Deploy del Contrato en Blockchain Ethereum Ropsten: 0x5C710D0C0478aAEd1A0a5E41E85BefbB8bA278dF. Se puede verificar en: [Contrato Cars](https://ropsten.etherscan.io/address/0x5c710d0c0478aaed1a0a5e41e85befbb8ba278df).  
Las funciones desarrolladas permiten:
1) Deploy de un Smart Contract con Web3.

Conceptos aprendidos:
- *Compilar Smart Contract*: Compilamos mediante código el Smart Contract y luego este objeto nos permite obtener el ByteCode necesario para poder Deployarlo.
- *Deploy Smart Contract*: Realizamos un transaccion firmada desde la Address Owner (Dueño) y como destino usamos el ByteCode del Smart Contract a Deployar.


