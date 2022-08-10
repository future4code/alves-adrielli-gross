console.log("Olá mundo!")
// Exercício 1.
function checaTriangulo(a: number, b: number, c: number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
console.log(checaTriangulo(2, 4, 6))

// Exercício 2.
function imprimeTresCoresFavoritas() {
    const cor1: string = process.argv[2]
    const cor2: string = process.argv[3]
    const cor3: string = process.argv[4]
    console.log([cor1, cor2, cor3])
 }

 // Exercício 3.
 function checaAnoBissexto(ano: number) {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}
console.log(checaAnoBissexto(2016))

// Exercício 4.
function comparaDoisNumeros(num1: number, num2: number) {
  let maiorNumero: number;
  let menorNumero: number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca = maiorNumero - menorNumero;

  return diferenca 
}
console.log(comparaDoisNumeros(8, 5))

// Exercício 5.
function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): string {
  let idade = anoAtual - anoNascimento
  let tempoCarteira = anoAtual - anoEmissao
 
   if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
    }else if(idade >= 20 || idade <= 50) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
    }else if(idade > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
     }else {
         return "error"
     }
 }
 console.log(checaRenovacaoRG(2022, 1996, 2012))
