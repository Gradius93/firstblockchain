const {Blockchain, Transaction} = require('./blockchain')

let grayCoin = new Blockchain()

grayCoin.createTransaction(new Transaction('Address1', 'Address2', 100))
grayCoin.createTransaction(new Transaction('Address2', 'Address1', 50))

console.log('\nStarting the miner...')
grayCoin.minePendingTransaction('Seans-address')
console.log('\nBalance of Sean is ', grayCoin.getBalanceOfAddress('Seans-address'))

console.log('\nStarting the miner again...')
grayCoin.minePendingTransaction('Seans-address')
console.log('\nBalance of Sean is ', grayCoin.getBalanceOfAddress('Seans-address'))
