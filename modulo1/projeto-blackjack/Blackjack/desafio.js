// BLACKJACK INICIO
console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("Quer jogar Black Jack?")){


// COMEÇO DA RODADA
const carta = comprarCarta(); // Usuário
const segCarta = comprarCarta();
console.log(`Você possuí esta carta: ${carta.texto} e ${segCarta.texto}.`) 
let somaUser = carta.valor + segCarta.valor
console.log(`Sua pontuação é de: ${somaUser}.`) 

const cartaPc = comprarCarta(); // Computador
const segPc = comprarCarta();
console.log(`O computador possuí esta carta: ${cartaPc.texto} e uma oculta.`) 
let somaPc = cartaPc.valor + segPc.valor
// console.log(`A pontuação do computador é: ${somaPc}.`)

/* if(somaUser > somaPc){
    console.log(`O usuário ganhou!`)
}else if(somaUser == somaPc){
    console.log(`Empate!`)
}else if(somaPc > 21){
    console.log(`O usuário ganhou!`)
}else if(somaUser > 21){
    console.log(`O computador ganhou!`)
}else if(somaPc > 21 && somaUser > 21){
    console.log(`A soma do usuário e do computador deram maior que 21, os dois perderam!`)
}
else {
    console.log(`O computador ganhou!`)
} */

// DESAFIO
const novaUser = comprarCarta(); // Usuário
const novaSegUser = comprarCarta();
const novaSomaUser = novaUser.valor + novaSegUser.valor
if(somaUser >= 22){
    console.log(`Suas novas cartas são: ${novaUser.texto} e ${novaSegUser.texto}.`)
    console.log(`A nova pontuação do usuário é: ${novaSomaUser}.`)
}

const novaPc = comprarCarta(); // Computador
const novaSegPc = comprarCarta();
const novaSomaPc = novaPc.valor + novaSegPc.valor
if(somaPc >= 22){
    console.log(`As novas cartas do computador são: ${novaPc.texto} e uma oculta.`)
}


// Rodada do PC
const compraPc1 = comprarCarta();
const compraPc2 = comprarCarta();
const compraPc3 = comprarCarta();
const somaPc2 = undefined
const somaPc3 = undefined
const somaPc4 = undefined
if(somaPc < 18){
   somaPc2 = somaPc + compraPc1
      if(somaPc2 < 18){
         somaPc3 = somaPc2 + compraPc2
            if(somaPc3 < 18){
               somaPc4 = somaPc3 + compraPc3
      }
   }
}


// Confirmação com > 22
const compraUser1 = comprarCarta();
if(somaUser <= 21 && somaPc <= 21){
   const retorno = confirm(`Suas cartas são ${carta.texto} e ${segCarta.texto}. A carta revelada do computador é ${cartaPc.texto}.` +
	"\n" + "Deseja comprar mais uma carta?")
   if(retorno == true){ 
      console.log(`Você comprou uma nova carta que é: ${compraUser1.texto}, o valor total agora é ${somaUser + compraUser1.valor}`)
      const valorUser = somaUser + compraUser1.valor
      if(valorUser > somaPc){
         console.log(`O usuário ganhou!`)
     }else if(somaUser == somaPc){
         console.log(`Empate!`)
     }else if(somaPc > 21){
         console.log(`O usuário ganhou!`)
     }else if(somaUser > 21){
         console.log(`O computador ganhou!`)
     }else if(somaPc > 21 && somaUser > 21){
         console.log(`A soma do usuário e do computador deram maior que 21, os dois perderam!`)
     }
     else {
         console.log(`O computador ganhou!`)
   }
} else if(somaUser > 21){
   const retorno1 = confirm(`Suas cartas são ${novaUser.texto} e ${novaSegUser.texto}. A carta revelada do computador é ${cartaPc.texto} e uma oculta.` +
	"\n" + "Deseja comprar mais uma carta?")
   if(retorno1 == true){
     console.log(`Você comprou uma nova carta que é: ${compraUser1.texto}, o valor total agora é ${novaSomaUser + compraUser1.valor}`)
   }
} else if(somaPc > 21){
   const retorno2 = confirm(`Suas cartas são ${carta.texto} e ${segCarta.texto}. A carta revelada do computador é ${novaPc.texto} e uma oculta.` +
	"\n" + "Deseja comprar mais uma carta?")
   if(retorno2 == true){
      console.log(`Você comprou uma nova carta que é: ${compraUser1.texto}, o valor total agora é ${novaSomaUser + compraUser1.valor}`)
   }
}}
} else {
   console.log("O jogo acabou.")
}