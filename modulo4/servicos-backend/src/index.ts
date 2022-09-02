import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import axios from "axios";

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

// Exercício 1
const getFullAddress = async (cep: string): Promise<any> => {
    try {
        const address = await axios.
            get(`https://viacep.com.br/ws/${cep}/json/`)

        return address.data
        
    } catch (error) {
        console.log(error)
    }
}

type Address = {
    cep: string
    logradouro: string
	numero: string
	complemento?: string,
	bairro: string
	cidade: string
	estado: string
}
const insertAddress = async (address: Address) => {
    await connection
        .insert(address)
        .into("aula50_address")
}

const createAddress = async (req: Request, res: Response) => {
    try {
        const { cep } = req.params

        const address = await getFullAddress(cep)

        if (!address) {
            res.status(404).send()
            throw new Error("Address not found")
        }
        const addressInfos: Address = {
            cep: address.cep,
            logradouro: address.logradouro,
            numero: address.ibge,
            complemento: address.complemento,
            bairro: address.bairro,
            cidade: address.localidade,
            estado: address.uf
        }
        await insertAddress(addressInfos)

        res.status(201).send({message: "Address created with success"})

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message || error.sqlMessage)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});