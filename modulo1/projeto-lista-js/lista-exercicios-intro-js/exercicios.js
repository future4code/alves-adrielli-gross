// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
let somar = soma(1, 2)
console.log(somar)

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensage = prompt("Digite sua mensagem")
  return console.log(mensage)
  }


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alt = Number(prompt("Qual a altura de uma retangulo?"))
  const lar = Number(prompt("Qual a largura desse retangulo?"))
  const multar = alt * lar
  return console.log(multar)
  }

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoatu = Number(prompt("Qual o ano atual?"))
  const anonas = Number(prompt("Qual o ano do seu nascimento?"))
  const sominha = anoatu - anonas
  return console.log(sominha)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}
let IMC = calculaIMC(85, 1.8)
console.log(IMC)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomuser = prompt("Qual seu nome?")
  let aninho = prompt("Qual sua idade?")
  let emauser = prompt("Qual seu e-mail?")
  return console.log(`Meu nome é ${nomuser}, tenho ${aninho} anos, e o meu email é ${emauser}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let firco = prompt("Diga uma cor favorita")
  let seco = prompt("Diga outra cor favorita")
  let terco = prompt("Diga mais uma cor favorita")
  let tudu = [firco, seco, terco]
  return console.log(tudu)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}
let frase = retornaStringEmMaiuscula("oi")
console.log(frase)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}
const espec = calculaIngressosEspetaculo(3000, 100)
console.log(espec)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}
let twostri = checaStringsMesmoTamanho("abc", "ola")
console.log(twostri)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let arrayzinho = array
  return arrayzinho[0]
}
console.log(retornaPrimeiroElemento)

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let arrayult = array.length
  return array[arrayult -1]
}
console.log(retornaUltimoElemento)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let socorro = array.length
  let socorro2 = array[0]
  array[0] = array[socorro -1]
  array[socorro -1] = socorro2
  return array
}
console.log(trocaPrimeiroEUltimo)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}
console.log(checaIgualdadeDesconsiderandoCase)

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoa = Number(prompt("Qual o ano atual?"))
  const anon = Number(prompt("Qual o ano que você nasceu?"))
  const cart = Number(prompt("Qual o ano da emissão da sua carteira de identidade?"))
  let year = anoa - anon
  let emis = anoa - cart
  let vinte = year <= 20
  let vincin = year > 20 && year <= 50
  let cinq = year > 50
  let aloka = (vinte && emis >= 5) || (vincin && emis >= 10) || (cinq && emis >= 15)
  return console.log(aloka)
}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anobi400 = ano % 400 === 0
  let anobi4 = ano % 4 === 0
  let ano100 = ano % 100 === 0
  let bizao = anobi400 || (anobi4 && !ano100) || anobi400
  return bizao
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let aninho = prompt("Você tem mais de 18 anos?")
  let estud = prompt("Você possui ensino médio completo?")
  let exclu = prompt("Você possui tempo disponivel durante os horários do curso?")
  let sim = aninho == "sim"
  let ssim = estud == "sim"
  let sssim = exclu == "sim"
  let final = (sim) && (ssim) && (sssim)
  return console.log(final)

}