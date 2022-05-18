// 1. O console imprime o valor de 10 por conta do laço, valor +=. 
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
// 2. a) O console irá imprimir todos os número da lista que são maiores que 18.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
// 2. b) Não

// 3. O console imprimirá 4 linhas de (*).
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// 1. a) b) c)
const userPets = +prompt("Quantos animais de estimação você tem?")
let arrayPets = []
if (userPets===0) {
    console.log("Que pena! Você pode adotar um.")
} else {
   let nomeAnimal
    for (let index = 0; index < userPets; index++) {
    nomeAnimal = prompt("Qual o nome dos seus pets?")
    arrayPets.push(nomeAnimal)
}}
console.log(arrayPets)

// 2. a)
arrayOriginal = [50, 48, 39, 87, 51, 16]
function numer(arrayNum) {
    for (let tudo of arrayNum){
        console.log(tudo)
    }
}
numer(arrayOriginal)

// 2. B)
function numerDiv(arrayNum) {
    for (let tudo of arrayNum){
        let div = +tudo
        console.log(div / 10)
    }
}
numerDiv(arrayOriginal)

// 2. c)
function numerPar(arrayNum) {
    let par = []
    for (let tudo of arrayNum){
        if (tudo % 2 === 0){
        par.push(tudo)
        console.log(tudo)
        }
    } 
}
numerPar(arrayOriginal)

// 2. d)
function numerStri(arrayNum) {
    let stri = []
    for (let index = 0; index < arrayNum.length; index++){
        const strin = `O elemento do index ${index} é: ${arrayNum[index]}.`;
        stri.push(strin)
    }   console.log(stri)
}
numerStri(arrayOriginal)

// 2. e)
function numerLis(arrayNum) {
    let aumen = arrayNum[0]
    let dimin = arrayNum[0]
    for (let tudo of arrayNum){
        if (tudo > aumen){
            aumen = tudo
        }
        if (tudo < dimin){
            dimin = tudo
        }
    }console.log(`O número mais alto do array original é o ${aumen}, e o mais baixo é o ${dimin}.`)
}
numerLis(arrayOriginal)