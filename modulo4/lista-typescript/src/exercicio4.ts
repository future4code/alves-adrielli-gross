// Exercício 4
enum section {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = 'Financeiro',
}

type collaborators = {
    nome: string,
    salário: number,
    setor: section,
    presencial: boolean
}

const arrayEmployees: collaborators[] = [
	{ nome: "Marcos", salário: 2500, setor: section.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: section.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: section.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: section.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: section.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: section.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: section.MARKETING, presencial: true }
]

function marketingPresential(list: collaborators[]): Array<collaborators> {
    const marketing: collaborators[] = list.filter((arrayEmployees) => {
       return arrayEmployees.setor === section.MARKETING && arrayEmployees.presencial === true
    })
    return marketing
}
console.log(marketingPresential(arrayEmployees))