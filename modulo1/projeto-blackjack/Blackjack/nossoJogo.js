
// BLACKJACK INICIO
    console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
} else {
	console.log("O jogo acabou!")
}

// COMEÇO DA RODADA
const carta = comprarCarta(); 
const segCarta = comprarCarta();
console.log(`Você possuí esta carta: ${carta.texto} e ${segCarta.texto}.`) // Usuário
let somaUser = carta.valor + segCarta.valor
console.log(`Sua pontuação é de: ${somaUser}.`) 

const cartaPc = comprarCarta();
const segPc = comprarCarta();
console.log(`O computador possuí esta carta: ${cartaPc.texto} e ${segPc.texto}.`) // Computador
let somaPc = cartaPc.valor + segPc.valor
console.log(`A pontuação do computador é: ${somaPc}.`)



