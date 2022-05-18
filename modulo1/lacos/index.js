//
const userPets = +prompt("Quantos pets você tem?")
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