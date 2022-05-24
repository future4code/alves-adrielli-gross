// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array = array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array){
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numPar = array.filter((numero) => numero % 2 == 0)
  return numPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numPar2 = array.filter((numer) => numer % 2 == 0)
    const novoArray = []
    for (let i of numPar2) {
        novoArray.push(i ** 2)
    }
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const crescente = array.sort((a, b) => a - b)
    return crescente[crescente.length-1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1 > num2){
        const tudinho = {
            maiorNumero: num1, 
            maiorDivisivelPorMenor: num1 % num2 == 0,
            diferenca: num1 - num2}
        return tudinho

    } else { 
        const tudinho2 = {
            maiorNumero: num2, 
            maiorDivisivelPorMenor: num2 % num1 == 0,
            diferenca: num2 - num1}
        return tudinho2
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}