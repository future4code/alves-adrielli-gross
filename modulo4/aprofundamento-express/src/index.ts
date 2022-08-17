import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

// Exercício 1
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

// Exercício 2
type toDoList = {
    userId: number, 
    id: number,
    title: string,
    completed: boolean
}

const list: toDoList = {
    userId: 5,
    id: 4,
    title: "teste",
    completed: false
}

// Exercício 3
const lists: toDoList[] = [
    {userId: 3,
    id: 2,
    title: "teste2",
    completed: true},

    {userId: 2,
    id: 1,
    title: "teste3",
    completed: true},

    {userId: 4,
    id: 3,
    title: "teste3",
    completed: false}
]

// Exercício 4
app.get("/lists/true", (req: Request, res: Response) => {          
    res.send(lists.filter((item) => {return item.completed}));
})

app.get("/lists/false", (req: Request, res: Response) => {          
    res.send(lists.filter((item) => {return !item.completed}));
})

// Exercício 5
app.post("/todo", (req: Request, res: Response) => {
    const { userId, title, completed } = req.body
    lists.push({
        userId: userId,
        id: +Date.now(),
        title: title,
        completed: completed,
    })
    res.send("Afazer foi criado")
})

// Exercício 6
app.post("/edit", (req: Request, res: Response) => {
    const { id, completed } = req.body
    const assignment = lists.find((item) => item.id === id)
    if (assignment) {
        if (completed) {
            lists.map((item) => {
                if (item.id === id) {
                    item.completed = completed
    }})
    res.send("Afazer foi alterado!")
    } else {
    res.status(404).send("Afazer não foi encontrado!")
}}}) 

app.get("/lists", (req: Request, res: Response) => {          
    res.send(lists);
})

// Exercício 7
app.delete("/delete/:id", (req: Request, res: Response) => {
    const id = +req.params.id
    if (id === undefined) {
        return res.status(404).send("Afazer não foi encontrado!")
    } else {
    const deleteItem = lists.filter((item) => {
        return item.id !== id
    })
    res.send(deleteItem)
}})

// Exercício 8
app.get("/lists/:userId", (req: Request, res: Response) => {          
    const userId = +req.params.userId
    const listUserId = lists.filter((item) => {
        return item.userId == userId
     })
    res.send(listUserId);
})
