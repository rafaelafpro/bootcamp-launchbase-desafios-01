const user = {
    name: "Rafael",
    transactions: [],
    balance: 0
  };


// Adicionar transações
function createTransaction (transaction) {
    user.transactions.push(transaction);
    if (transaction.type === "credit"){
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

// Relatórios
function getHigherTransactionByType (transactionType) {
    let higherTransaction = {
        type: transactionType,
        value: 0
    };
    for (let transaction of user.transactions){
        if (transaction.type === transactionType && transaction.value > higherTransaction.value){
            higherTransaction = transaction;
        }
    }
    return higherTransaction;
}

function getAverageTransactionValue (){
    let sum = 0;
    for (let transaction of user.transactions){
        sum += transaction.value;
    }
    let average = sum / (user.transactions.length);
    return average;
}

function getTransactionsCount () {
    let transactionsCount = {
        credit: 0,
        debit: 0
    };
    for (let transaction of user.transactions){
        if (transaction.type === 'credit'){
            transactionsCount.credit ++;
        } else {
            transactionsCount.debit ++;
        }
    }
    return transactionsCount;
}
  

createTransaction({type: "credit", value:50});
createTransaction({type: "credit", value:120});
createTransaction({type: "debit", value:80});
createTransaction({type: "debit", value:30});

console.log(user.balance);

console.log(getHigherTransactionByType ("credit"));
console.log(getHigherTransactionByType ("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());



// Solução do instrutor

// // Operações bancárias

// const user = {
//     name: 'Mariana',
//     transactions: [],
//     balance: 0
// }

// // Adicionar transações
// function createTransaction(transaction) {
//     user.transactions.push(transaction)

//     if (transaction.type === 'credit') {
//         user.balance = user.balance + transaction.value
//     } else {
//         user.balance = user.balance - transaction.value
//     }
// }

// // Relatórios
// function getHigherTransactionByType(type) {
//     let higherTransaction
//     let higherValue = 0

//     for (let transaction of user.transactions) {
//         if (transaction.type == type && transaction.value > higherValue) {
//             higherValue = transaction.value
//             higherTransaction = transaction
//         }
//     }

//     return higherTransaction
// }

// function getAverageTransactionValue() {
//     let sum = 0

//     for(let transaction of user.transactions) {
//         sum += transaction.value
//     }

//     return sum / user.transactions.length
// }

// function getTransactionsCount() {
//     let count = {
//         credit: 0,
//         debit: 0,
//     }
//     for (let transaction of user.transactions) {
//         if (transaction.type === 'credit')
//             count.credit++
//         else
//             count.debit++
//     }

//     return count
// }


// createTransaction({ type: 'credit', value: 50 })
// createTransaction({ type: 'credit', value: 120 })
// createTransaction({ type: 'debit', value: 80 })
// createTransaction({ type: 'debit', value: 30 })

// console.log(user.balance) // 60

// console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
// console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

// console.log(getAverageTransactionValue()) // 70

// console.log(getTransactionsCount()) // { credit: 2, debit: 2 }