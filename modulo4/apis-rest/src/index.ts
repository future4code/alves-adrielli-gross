import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

// Exercício 1. a) Método GET
// 1. b) Pelo path passado no endpoint
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

// Exercício 2. a) Pelo PathParams, porque o método GET não usa body.
// 2. b) Tipando o user e utilizando a função ENUM.
type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

app.get("/users/:type", (req: Request, res: Response) => {          
    const type = req.params.type
    const usersType = users.filter((item) => {
        return item.type == type
     })
    res.send(usersType);
})

// Exercício 3. a) GET pelo PathParams
// 3. b) 
app.get("/searchuser/:name", (req: Request, res: Response) => {          
    const nameUser = req.params.name
    const userValidate = users.find((item) => item.name === nameUser)
    if(userValidate){
        const usersName = users.filter((item) => item.name == nameUser
     )
        res.send(usersName);
    }else{
        res.status(404).send(`Nome ${nameUser} não foi encontrado!`)
}})

// Exercício 4. a) Não mudou nada aparentemente, pois se o recurso não existir o método PUT cria um novo. 
// Mas ele também serve para atualizar e criar caso o recurso não exista.
// 4. b) Não, porque eu só quero criar um usuario e não atualiza-lo.
app.post("/create", (req: Request, res: Response) => {
    const { name, email, type, age } = req.body
    users.push({
        id: Date.now(),
        name: name,
        email: email,
        type: type,
        age: age
    })
    res.status(201).send(`Usuário foi adicionado com sucesso!`)
    
})