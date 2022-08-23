// Exercício 1

function identify(name: string, data: string) {
    const day: number = Number(data.split('/')[0])
    const month: number = Number(data.split('/')[1])
    const year: number = Number(data.split('/')[2])
    const comment: string = `Hello my name is ${name}, I was born in ${day} month ${month} year ${year}`
    return comment
}
console.log(identify("Adrielli", "03/03/1996"))
