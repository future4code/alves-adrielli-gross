// 1. a) O console irá imprimir os 3 objetos completos, um por um.
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  // 2. a) O console irá imprimir somente os nomes dos objetos.
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

// 3. a) O console irá imprimir somente os objetos com apelidos diferentes de Chijo
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) */

// 1. a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const arrayPets = pets.map((item, index, array) => {
     return item.nome
})
console.log(arrayPets)

// 1. b)
const newArrayPets = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(newArrayPets)

// 1. c)
const somentePoo = pets.map((item) => {
    if (item.raca === "Poodle"){
      console.log(`Você ganhou um cupom de desconto de 10% para tosar o(a) ${item.nome}!`)  
    }
}) 

// 2. a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const nomesArray = produtos.map((item) => {
    return item.nome
})
console.log(nomesArray)

// 2. b)
const newMercado = produtos.filter((item, index, array) => {
    const nomePro = item.nome
    const precoDes = item.preco * 0.95
    return console.log(`O item: ${nomePro}, era R$ ${item.preco} e está por R$ ${precoDes}.`)
})

// 2. c)
let categoria = produtos.filter((item) => item.categoria == "Bebidas")
let bebidas = categoria.map((item) => item.nome)
console.log(bebidas)

// 2. d)
let ype = produtos.filter((item) => item.nome.includes("Ypê"))
let pesquisaYpe = ype.map((item) => item.nome)
console.log(pesquisaYpe)

// 2. e)
const ypeBuy = produtos.map((item) => {
    const ypeProd = item.nome.includes("Ypê")
    if(ypeProd){
        console.log(`Compre ${item.nome} por R$ ${item.preco}.`)
    }
})
