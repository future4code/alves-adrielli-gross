// 1. a)
/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

// 1. b)
function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2) // não apareceria nada no console
minhaFuncao(10) // // não apareceria nada no console

// 2. a)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) // Boolean, se o usuario escrever qualquer texto sem ter cenoura o console retorna false

//2. b) Todas retornarão true por conter cenoura

// 1.0 a)
function cod(sobreu) {
    console.log(sobreu)
}

cod("Eu sou Adrielli, tenho 25 anos, moro em Campinas - SP e sou estudante.")

// 1.0 b)
function everthing(nomer, idade, city, eusoy) {
    console.log(`Eu sou ${nomer}, tenho ${idade} anos, moro em ${city} e sou ${eusoy}.`)
}

everthing("Laís", 23, "São Paulo", "instrutora")

// 2.0 a)
function soma(num1, num2) {
    return num1 + num2
}
console.log("A soma dos dois número dentro desse código é de:", soma(2, 2))

// 2.0 b)
const usnum1 = Number(prompt("Fale um número."))
const usnum2 = Number(prompt("Fale outro número."))
function bool(nume1, nume2) {
    return nume1 >= nume2
}
console.log("O primeiro número é maior que o segundo?", bool(usnum1, usnum2))

// 2.0 c) 
const numpar = Number(prompt("Digite outro número."))
function bool2(numer1) {
    return numer1 % 2
}
console.log("O número dentro do código é par?", bool2(numpar)==0)

// 2.0 d)
const userup = prompt("Escreva um textinho aqui")
const upleng = function stringer(hehe) {
    return hehe.toUpperCase() + " " + hehe.length
}
console.log(upleng(userup)) 

// 3.0
const usnum3 = prompt("Fale um número.")
const usnum4 = prompt("Fale outro número.")
const math = (topi, topi2) => {
     const mat1 = topi + topi2 
     const mat2 = topi - topi2 
     const mat3 = topi * topi2
     const mat4 = topi / topi2
    return mat1, mat2, mat3, mat4

}
const altmath = math(usnum3, usnum4)
console.log(math) */