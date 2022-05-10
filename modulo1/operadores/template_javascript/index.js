// Exercício de interpretação de código

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean

// Qual o problema do código a seguir? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
primeiroNumero = Number(primeiroNumero) // Mudança de spring para number
segundoNumero = Number(segundoNumero) // Mudança de spring para number
const soma = primeiroNumero + segundoNumero

console.log(soma) 

// Faça um programa com os passos do enunciado 

let idade = prompt("Escreva sua idade, por favor")
let amiges = prompt("Escreva a idade do seu/sua bff")
console.log("Sua idade é maior que a do seu/sua bff?", idade >= amiges)
idade = Number(idade) // Mudança de spring para number
amiges = Number(amiges) // Mudança de spring para number
let resultado = idade - amiges
console.log("A diferença de idade de vocês são de", resultado) 

// Faça outro enunciado de acordo com os passos pedidos 

let numero = prompt("Escreve aqui um número par")
numero = Number(numero)
let resultado2 = numero % 2
console.log(resultado2) // sempre será zero
// Se o úsuario digitar um número impar o resultado pode ser variado

// Faça mais um programa

let idadeusuario = prompt("Qual sua idade?")
idadeusuario = Number(idadeusuario)
let resultado3 = idadeusuario * 12
console.log("Sua idade em meses é de", resultado3)
let resultado4 = idadeusuario * 365
console.log("Sua idade em dias é de", resultado4)
let resultado5 = resultado4 * 24
console.log("Sua idade em horas é de", resultado5)

// Mais um programa 

let numero1 = prompt("Digite aqui um número")
let numero2 = prompt("Digite outro número aqui")
numero1 = Number(numero1)
numero2 = Number(numero2)
console.log("O primeiro número é maior que o segundo?", numero1 >= numero2)
console.log("O primeiro número é igual ao segundo?", numero1==numero2)
let resultado6 = numero1 / numero2
console.log("O primeiro número é divisível pelo segundo?", resultado6==0)
let resultado7 = numero2 / numero1
console.log("O segundo número é divisivel pelo primeiro?", resultado7==0)
