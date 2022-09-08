import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercício 1. a)
export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }

const searchByName = async (name: string): Promise<any> => {
    const resultSearchName = await connection.raw(`
    SELECT * FROM aula49_exercicio
    WHERE name = '${name}';
    `)
    return resultSearchName
}

app.get("/teacher", async (req: Request, res: Response) => {
    try {
        const users = await searchByName(req.query.name as string)  
        res.status(200).send(users)
        
     } catch (error) {
        console.log(error)
        res.send("Unexpected error")
     }
});

// 1. b)
const searchByType = async (type: string): Promise<any> => {
    const resultSearchName = await connection.raw(`
    SELECT * FROM aula49_exercicio
    WHERE type = '${type}';
    `)
    return resultSearchName
}

app.get("/teacher/:type", async (req: Request, res: Response) => {
    try {
        const users = await searchByType(req.params.type as string)  
        res.status(200).send(users)
        
     } catch (error) {
        console.log(error)
        res.send("Unexpected error")
     }
});

// Exercício 2.
const searchNameOrType = async (sort: string, order: string): Promise<any> => {
    const result = await connection('aula48_exercicio')
        .orderBy(sort, order);
 
    return result;
};

app.get("/teacher/:type", async (req: Request, res: Response) => {
    try {
        let sort = req.query.sort as string
        let order = req.query.order as string
  
        if (!sort || !order) {
           throw new Error(`Please enter a valid values`)
        }
  
        sort = sort.toLocaleLowerCase() === "name"? "name" : sort.toLocaleLowerCase() === "type"? "type" : "email";   
        order = order.toLocaleUpperCase() === "DESC"? "DESC" : "ASC";  
  
        const users = await searchNameOrType(sort, order);
  
        res.status(200).send(users);
        
     } catch (error: any) {
        console.log(error);
        res.send("Unexpected error");
     };});

// Exercício 3. 
const searchUserByPage = async(size: number, offset: number):Promise<any> => {
    const result = await connection('aula48_exercicio')
        .limit(size)
        .offset(offset);

    return result;
};

export const getUsersByPages = async(
    req: Request,
    res: Response
 ): Promise<void> =>{
    try {
       const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1;
       const size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 5;
       
       const offset: number = size * (page - 1);
 
       const users = await searchUserByPage(size, offset);
 
       res.status(200).send(users);
       
    } catch (error: any) {
       console.log(error);
       res.send(error.message || error.sqlMessage);
    };
 };

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});