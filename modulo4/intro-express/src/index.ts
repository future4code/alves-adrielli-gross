import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

// Exercício 1
app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express");
})

// Exercício 2
type usersProperties = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

const userDri: usersProperties = {
    id: 1,
    name: "Dri",
    phone: 8888888,
    email: "dri@dri.com",
    website: "dridri.com"
}

app.get("/ex2", (req: Request, res: Response) => {          
    res.send(userDri);
})

// Ecercício 3
const users: usersProperties[] = [
    {id: 1,
    name: "Leonardo",
    phone: 12345678,
    email: "leo@leo.com",
    website: "leo.com.br"},
    
    {id: 2,
    name: "Rafael",
    phone: 89101112,
    email: "rafa@rafa.com",
    website: "rafa.com.br"},

    {id: 3,
    name: "Elias",
    phone: 13141516,
    email: "elias@elias.com",
    website: "elias.com.br"}
]

// Exercicio 4
app.get("/users", (req: Request, res: Response) => {          
    res.send(users);
})

// Exercício 5
type postsProperties = {
    id: number,
    title: string,
    body: string,
    userId: number
}

const postPharah: postsProperties = {
    id: 5,
    title: "Pharah",
    body: "Gatinha de 4 anos mesclada, pelinho médio",
    userId: 1
}

// Exercício 6 Deixar separado por ser mais prático
const posts: postsProperties[] = [
    {id: 1,
    title: "Branquinho",
    body: "Gatinho de 14 anos branco, pelinho curto",
    userId: 1},

    {id: 2,
    title: "Frajola",
    body: "Gatinho de 10 anos branco e preto, pelinho curto",
    userId: 1},
    
    {id: 3,
    title: "Liully",
    body: "Gatinha de 7 anos branca e preta, pelinho curto",
    userId: 1},

    {id: 4,
    title: "Draco",
    body: "Gatinho de 5 anos branco e preto, pelinho curto",
    userId: 3},

    {id: 6,
    title: "Haru",
    body: "Gatinho de 3 anos cinza e branco, pelinho curto",
    userId: 3},  

    {id: 7,
    title: "Ruby",
    body: "Gatinho de 3 anos calica, pelinho curto",
    userId: 2},

    {id: 8,
    title: "Ollie",
    body: "Gatinho de 1 ano tabby, pelinho curto",
    userId: 2}
]

// Exercício 7
app.get("/posts", (req: Request, res: Response) => {          
    res.send(posts);
})

// Exercício 8
app.get("/posts/1", (req: Request, res: Response) => {          
    res.send(posts.filter((post) => {post.userId === 1}));
})

