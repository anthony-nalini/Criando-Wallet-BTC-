//importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require ('bitcoinjs-lib')

//definindo qual rede será usada (será usada a testnet por se tratar de testes)
//caso queira rodar na rede principal, trocar bitcoin.networks.testnet por bitcoin.networks.bitcoin
const network = bitcoin.networks.testnet

//derivação da carteira deterministica (HD)
//utilizar m/49'/1'/0'/0 para ficar na testnet e m/49'/0'/0'/0 na mainnet
const path = `m/49'/1'/0'/0`

//criando mnemonic para a seed (as palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)


//criando a conta (chaves publica e privada)
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAdress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira Gerada")
console.log("Endereço: ", btcAdress)
//o node.toWIF formata o texto de saida para poder ser importado pelo software de gerenciamento de carteira
console.log("Chave Privada: ", node.toWIF())
console.log("Seed", mnemonic)