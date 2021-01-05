const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('c384456f2c89032e036e938832eca58a8f301e42035909f9c48dc58d33222f06')
const myWalletAddress = myKey.getPublic('hex')

let grayCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'Public key goes here', 10)

tx1.signTransaction(myKey)
grayCoin.addTransaction(tx1)

console.log('\nStarting the miner...')
grayCoin.minePendingTransaction(myWalletAddress)

console.log('\nBalance of Sean is ', grayCoin.getBalanceOfAddress(myWalletAddress))
