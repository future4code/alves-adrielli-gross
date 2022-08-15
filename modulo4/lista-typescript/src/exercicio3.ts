import { nodeModuleNameResolver } from "typescript"

// Exercício 3
enum genre {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}
type description = {
    name: string,
    year: number, 
    movieType: genre,
    rate?: number,
}

function movie(name: string, year: number, movieType: genre, rate?: number): description {
    if (rate){
        return {
            name,
            year,
            movieType,
            rate,
        }
    } else {
        return {
            name,
            year,
            movieType,
        }
    }

}
console.log(movie("Attempt", 2022, genre.DRAMA, 9))
console.log(movie("Attempt2", 2022, genre.TERROR))