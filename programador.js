const programador = {
    nome: "Rafael",
    idade: 25,
    tecnologias: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        }
    ]
}

console.log(
    `O programador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`
);

// // solução do instrutor

  
// // Vetores e objetos

// const programador = {
//     nome: "Mayk",
//     idade: 35,
//     tecnologias:  [
//         { nome: 'JavaScript', especialidade: 'Desktop' }, 
//         { nome: 'JavaScript', especialidade: 'Web/Mobile' }
//     ]
// }

// console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)