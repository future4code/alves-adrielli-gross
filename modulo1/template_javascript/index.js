/*let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)

// O primeiro resultado no console será de 10, já no segundo será de 10, 5.

let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)

// O resultado no console executado será 10, 10 e 10

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`você recebe ${p/t} por hora`)

// Abrirá uma caixa de dialogo perguntando quantas horas e quanto ganha por dia e o alert irá dividir os dois dando o resultado de quanto recebe por hora.
*/
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
console.log(nome, idade)
console.log(typeof nome, typeof idade)
alert(`Olá, ${nome}, você tem ${idade} anos`)

// As variaveis serão string por conta da caixa de dialogo.


let quest1 = prompt("Você já almoçou hoje?")
let quest2 = prompt("Você está com frio?")
let quest3 = prompt("Você gosta de gatos?")
alert(`Você já almoçou hoje? ${quest1}`)
alert(`Você está com frio? ${quest2}`)
alert(`Você gosta de gatos? ${quest3}`)

// A caixas de dialogo serão respondidas e serão transmitidas as respostas no alerta.

let a = 10
let b = 25
a = b
console.log("O novo valor de a é", a) // O novo valor de a é 25
b = 10
console.log("O novo valor de b é", b) // O novo valor de b é 10

