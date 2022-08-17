
// 3)
const fs = require('fs');

const tarefas = [
    "Lavar a Louça",
    "Comprar Leite"
];

const tarefa2 = process.argv[2]
tarefas.push(tarefa2)


const listaTarefas = JSON.stringify(tarefas)
console.log(listaTarefas)
console.log(__dirname)

fs.writeFileSync(__dirname + "/save.json", listaTarefas)

const itensSave = fs.readFileSync(__dirname + "/save.json")

console.log(JSON.parse(itensSave))