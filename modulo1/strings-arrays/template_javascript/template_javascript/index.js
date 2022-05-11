let array
console.log('a. ', array) // undefined porque não existe um valor

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // o código lerá 11 elementos

let i = 0
console.log('d. ', array[i]) // indicou o primeiro número do array

array[i+1] = 19
console.log('e. ', array) // 11

const valor = array[i+6] // 3 + 6 = 9
console.log('f. ', valor) 

// Qual valor será impresso no console?

const frase =prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27

// 
const username = prompt("Digite seu nome") 
const useremail = prompt("Digite seu e-mail para cadastro")
console.log(`O e-mail ${useremail.trim()} foi cadastrado com sucesso! Seja bem-vindo ${username}.`)


//
let meuarray = ["1. Strogonoff", "2. Risoto", "3. Yakisoba", "4. Frango grelhado", "5. Lamén"]
console.log(meuarray) // Imprimiu o array completo
let teste1 = "Essas não minhas comidas favoritas"
console.log(teste1)
for (let indice = 0; indice < meuarray.length; indice++) {
    let teste = meuarray[indice];
    console.log(teste)
} 
const userfood = prompt("Qual sua comida favorita?")
meuarray[1] = "2. " + userfood 
const teste3 = "E uma dessas é a sua comida favorita"
console.log(teste3)
for (let indice = 0; indice < meuarray.length; indice++) {
    let teste2 = meuarray[indice];
    console.log(teste2)
}

// 

const array2 = []
const listadetarefas = array2
let usertodo = prompt("Digite uma tarefa para fazer hoje")
let i = 0
listadetarefas[i] = "1. " + usertodo
usertodo = prompt("Digite uma segunda tarefa")
i = 1 
listadetarefas[i] = "2. " + usertodo
usertodo = prompt("Digite uma terceira tarefa")
i = 2
listadetarefas[i] = "3. " + usertodo
console.log("To do list: " + listadetarefas)
usertodo = prompt("Digite o número da tarefa que já realizou hoje") - 1
listadetarefas.splice("[" + usertodo + "]",1)
console.log("Ainda falta a/as terefa/s:", listadetarefas)
