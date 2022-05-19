const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// 1. a) Matheus Nachtergaele, Virgininia Cavendish, canal: "Globo" horario: "14h"

// 2. a) nome: "Juca" idade: 3 raca: "SRD" / nome: "Juba" idade: 3 raca: "SRD" / nome: "Jubo" idade: 3 raca "SRD"
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// 2. b) copia os objetos da variavel especificada

// 3. a) false / undefined
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}
console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// 3. b) false porque o beckender do objeto era false e undefined porque não existe altura dentro da propriedade

// 1. a)

const me = {
    nome: "Adrielli",
    apelido: ["Dri", "Peach", "Pxi"],
}

const meFun = (obj) => {
    return console.log(`Eu sou a ${obj.nome}, mas pode me chamar de: ${obj.apelido[0]}, ${obj.apelido[1]} ou ${obj.apelido[2]}`)
}    
meFun(me)

// 1. b)
const newMe = {
    ...me,
    apelido: ["Drizinha", "Frozen", "Daniela"]
}
meFun(newMe)

// 2. a)
const leu = {
    nome: "Leonardo Hueara",
    idade: 26,
    profissao: "Gestor de energia"
}

const lu = {
    nome: "Lucas Vinicius",
    idade: 26,
    profissao: "Economista"
}

// 2. b)
const funcao = (jota) => {
    const pessoa = [jota.nome, jota.nome.length, jota.idade, jota.profissao, jota.profissao.length]
    return pessoa
}
console.log(funcao(leu))
console.log(funcao(lu))

// 3. a)
const carrinho = []

// 3. b)
const objFruta1 = {
    nome: "Morango",
    disponibilidade: true,
}

const objFruta2 = { 
    nome: "Ameixa",
    disponibilidade: true
}

const objFruta3 = {
    nome: "Uva",
    disponibilidade: true
}

// 3. c)
const fruFun = (objFru) => {
    return carrinho.push(objFru.nome)
}

// 3. d)
fruFun(objFruta1) 
fruFun(objFruta2) 
fruFun(objFruta3)
console.log(carrinho)


// DESAFIO 2. 
function filFun () {
    const filme1 = {
    nome: "101 Dalmatas",
    ano: 1996
} 
    const filme2 = {
    nome: "Procurando Nemo",
    ano: 2003
}
    return console.log("O primeiro filme foi lançado antes do segundo?", filme1.ano > filme2.ano, "O segundo filme foi lançado antes do primeiro?", filme2.ano > filme1.ano)
}
console.log(filFun())

// DESAFIO 3.
const fruDis = (objFru) => {
    return !objFru.disponibilidade
}
console.log(fruDis(objFruta1))
