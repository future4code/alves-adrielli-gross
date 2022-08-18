import express, {Request, Response} from 'express';
import cors from 'cors';
import { products } from './data'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

// Exercício 1
app.get("/test", (req: Request, res: Response) => {
    res.send("A API está funcional")
})

// Exercício 3
app.post("/create", (req: Request, res: Response) => {
    const { name, price } = req.body
    products.push({
        id: Date.now().toString(),
        name: name,
        price: price
    })
   // res.status(201).send(`Produto foi adicionado com sucesso!`)
    res.send(products)
})

// Exercício 4
app.get("/products", (req: Request, res: Response) => {
    res.send(products)
})

// Exercício 5
app.post("/editprice", (req: Request, res: Response) => {
    const { id, price } = req.body
    const editPrice = products.find((item) => item.id === id)
    if (editPrice) {
        if (price) {
            products.map((item) => {
                if (item.id === id) {
                    item.price = price
    }})
    res.status(200).send("O preço do produto foi alterado!")
    } else {
    res.status(404).send("Produto não encontrado")
}}}) 

// Exercício 6
app.delete("/delete/:id", (req: Request, res: Response) => {
    const id = req.params.id
    if (id === undefined) {
        return res.status(404).send("Id do produto não foi inserido!")
    } else {
    const deleteProducts = products.filter((item) => {
        return item.id !== id
    })
    res.send(deleteProducts)
}})

// Exercício 7
app.post("/createvalidate", (req: Request, res: Response) => {
    try{ 
    const { name, price } = req.body
    if(name === undefined || price === undefined){
        throw new Error("Name ou price não foram recebidos")
    }
    if(typeof name !== 'string'){
        throw new Error(`${name} Não é uma string`)
    }
    if(typeof price !== 'number'){
        throw new Error(`${price} Não é um number`)
    }
    if(price <= 0){
        throw new Error(`Não é permitido price menor ou igual a zero`)
    }
    products.push({
        id: Date.now().toString(),
        name: name,
        price: price
    })
    res.send(products)}
    catch (error: any) {
        res.send(error.message)
}})

// Exercício 8
app.post("/editpricevalidate", (req: Request, res: Response) => {
    try{
    const { id, price } = req.body
    if(price === undefined){
        throw new Error(`Price não recebido`)
    }
    if(typeof price !== 'number'){
        throw new Error(`${price} Não é um number`)
    }
    if(price <= 0){
        throw new Error(`Não é permitido price ser menor ou igual a zero`)
    }
    if(id === undefined){
        throw new Error("Id não recebido")
    }
    const editPrice = products.find((item) => item.id === id)
    if (editPrice) {
        if (price) {
            products.map((item) => {
                if (item.id === id) {
                    item.price = price
    }})
    res.status(200).send("O preço do produto foi alterado!")
    }} else {
        throw new Error("Id do produto a ser editado não foi encontrado")
    }}
    catch (error: any) {
        res.send(error.message)
}})

// Exercício 9
app.delete("/deletevalidate/:id", (req: Request, res: Response) => {
    try{
    const id = req.params.id
    if (id === undefined) {
        throw new Error("Id do produto não foi inserido!")
    } 
    const searchId = products.find((item) => item.id === id)
    if (searchId) { 
        const deleteProducts = products.filter((item) => {
            item.id !== id
            res.send(deleteProducts)
        })
    } else {
    throw new Error("Id do produto não foi encontrada")
    }}catch (error: any) {
        res.send(error.message) 
}}) 
