// Exercício 1

function identificacao(name: string, data: string) {
    const day: number = Number(data.split('/')[0])
    const month: number = Number(data.split('/')[1])
    const year: number = Number(data.split('/')[2])
    const comment: string = `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`
    return comment
}
console.log(identificacao("Adrielli", "03/10/1996"))
