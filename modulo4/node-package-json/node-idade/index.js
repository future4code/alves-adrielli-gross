// 1) a- process.argv[]

// DESAFIO
const azul = '\x1b[36m%s\x1b[0m'

const valor = Number(process.argv[3])
if (process.argv[2] === undefined) {
    console.log("Você precisa digitar parâmetros")
} else if (isNaN(valor.NaN)) {
    console.log("Você precisa digitar dois parâmetros")
} else {
// 1) b-
console.log(azul, "Olá, Adrielli! Você tem 25 anos.")
console.log("Olá, ", process.argv[2], "! você tem ", valor, "anos.")

// 1) c-
console.log(azul, "Olá,", process.argv[2], `! você tem ${valor} anos. Daqui 7 anos você terá`, valor + 7, ".")}

