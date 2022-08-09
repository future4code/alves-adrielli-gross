// 1) a- process.argv[]

// 1) b-
console.log("Olá, Adrielli! Você tem 25 anos.")
console.log("Olá, ", process.argv[2], "! você tem ", process.argv[3], "anos.")

// 1) c-
const valor = Number(process.argv[3])
console.log("Olá,", process.argv[2], `! você tem ${valor} anos. Daqui 7 anos você terá`, valor + 7, ".")
