const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// 1. a) O código irá dizer se o número que o usuário digitou é true ou false de acordo com if/else. 
// 1. b) Para números pares
// 1. c) Para números impares

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// 2. a) O código irá mostrar o valor da fruta escolhida pelo usuário
// 2. b) O preço da fruta Maçã é R$ 2.25
// 2. c) O preço da fruta Pêra é de R$ 5

const numeror = Number(prompt("Digite o primeiro número."))

if(numeror > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) 
// 3. a) Está transformando um prompt de comando em number
// 3. b) Não irá aparecer nada 
// 3. c) Sim, o espoco global não consegue pegar informação do if

// ESCRITA DE CÓDIGO
// 1. a) b) c)
const userDirigir = Number(prompt("Qual sua idade?"))
if (userDirigir > 18) {
    console.log("O usuário está apto para aprender a dirigir.")
} else {
    console.log("O usuário ainda não tem idade suficiente para dirigir")
}

// 2. 
const userEstud = prompt("Qual periodo você estuda? Manhã = M, Verpertino = V, Noite = N.").toLowerCase()
const manha = "m"
const tarde = "v"
if (userEstud === manha) {
    console.log("Bom dia!")
} else if (userEstud === tarde) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// 3. 
switch (userEstud) {
    case 'm':
        console.log("Bom dia!")
        break;
    case 'v':
        console.log("Boa tarde!")
        break;
    case 'n':
        console.log("Boa noite!")
        break;
    default:
        console.log("Você não digitou os comandos corretamente")
        break;
}

// 4.
const filme = prompt("Qual o genero de filme que você irá assistir?").toLocaleLowerCase()
const precofilme = Number(prompt("Qual o valor do ingresso?"))

if (filme === fantasia && precofilme === 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}