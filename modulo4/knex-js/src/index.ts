import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express"

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());

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

// Exercício 1. a) A conexão raw é uma pesquisa "crua" que retorna exatamente o que o MySQL devolveu.

// 1. b)
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT name FROM Actor WHERE name = '${name}'
  `)
  return result[0][0]
}

(async() =>{
  console.log(await getActorByName("Pessoa1"))
})()

// 1. c)
const getActorByGender = async (gender: string): Promise<any> => {
  const result1 = await connection.raw(`
  SELECT COUNT(*), gender FROM Actor WHERE gender = '${gender}' 
  `)
  return result1[0][0]
}

(async() => {
  console.log(await getActorByGender("male"))
})();

(async() => {
  console.log(await getActorByGender("female"))
})();

// Exercício 2. a)
const updateSalary = async(id: string, salary: number): Promise<void> => {
  await connection("Actor").update({
    salary: salary
  })
  .where("id", id)
};

(async() => {
  console.log(await updateSalary("001", 658471))
})();

// 2. b)
const deleteActor = async(id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id)
};

(async() => {
  console.log(await deleteActor("007"))
})();

// 2. c)
const averageSalaryByGenre = async (gender: string): Promise<any> => {
  const result2 = await connection.raw(`
  SELECT AVG(salary) FROM Actor WHERE gender = '${gender}' 
  `)
  return result2[0][0]
}

(async() => {
  console.log(await averageSalaryByGenre("male"))
})();

(async() => {
  console.log(await averageSalaryByGenre("female"))
})();

// Exercício 3. a)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send("Unexpected error");
  }
});

// 3. b)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = await getActorByGender(req.query.gender as string)
    res.status(200).send({quantity: gender,});
  } catch (error) {
    res.status(500).send("Unexpected error")
  }})

// Exercício 4. a)
app.put("/actorupdate", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send("Success!");
  } catch(err){
  res.status(500).send("Unexpected error")
  }});

// 4. b)
app.delete("/actor/delete/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
    res.status(200).send("Success!");
  } catch(err){
    res.status(500).send("Unexpected error");
  }})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


