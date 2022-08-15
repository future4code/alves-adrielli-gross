// Exercicio 5
type user = {
    name: string,
    email: string,
    role: string
}

const arrayUser: user[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function adminUser(list: user[]): string[] {
    const admin = list.filter((arrayUser) => {
       return arrayUser.role === "admin"
    }).map((arrayUser) => {
        return arrayUser.email
    })
    return admin
}
console.log(adminUser(arrayUser))
