const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function calculaSaldo (receitas, despesas){
    const rec = somaNumeros (receitas);
    const des = somaNumeros (despesas);
    const saldo = rec - des;
    return saldo;
}

function somaNumeros (numeros) {
    let sum = 0;
    for (let i=0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    return sum;
}

function printSaldo (usuarios) {
    for (let usuario of usuarios){
        const saldo = calculaSaldo (usuario.receitas, usuario.despesas);
        let situacao;
        if (saldo > 0) situacao = "POSITIVO";
        else situacao ="NEGATIVO";
        console.log(`${usuario.nome} possui saldo ${situacao} de ${parseFloat(saldo.toFixed(2))}`);
    }
}

printSaldo (usuarios);


// SOLUÇÃO DO INSTRUTOR
// // Soma de despesas e receitas

// const usuarios = [
//     {
//       nome: 'Salvio',
//       receitas: [115.3, 48.7, 98.3, 14.5],
//       despesas: [85.3, 13.5, 19.9]
//     },
//     {
//       nome: 'Marcio',
//       receitas: [24.6, 214.3, 45.3],
//       despesas: [185.3, 12.1, 120.0]
//     },
//     {
//       nome: 'Lucia',
//       receitas: [9.8, 120.3, 340.2, 45.3],
//       despesas: [450.2, 29.9]
//     }
//   ]

// function calculaSaldo(receitas, despesas) {
//     const somaReceitas = somaNumeros(receitas)
//     const somaDespesas = somaNumeros(despesas)
    
//     return somaReceitas - somaDespesas
// }

// function somaNumeros(numeros) {
//     let soma = 0

//     for (let numero of numeros) {
//         soma = soma + numero
//     }

//     return soma
// }

// for (let usuario of usuarios) {
//     const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

//     if (saldo > 0) {
//         console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
//     } else {
//         console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
//     }
// }
