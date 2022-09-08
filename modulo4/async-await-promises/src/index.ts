import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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

// Exercício 1. a) Usamos o endpoint GET.
// 1. b) Ultilizando o promise.all.
// 1. c) 
// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${baseUrl}/subscribers`);
//     return response.data;
//   };

// Exercício 2. a) A função normal irá executar por ordem.
// 2. b)
// const exerciseTwo = async (): Promise<any[]> => {
//     const response = await axios.get(`${baseUrl}/subscribers`);
//     return response.data;
// }

// Exercício 3. a) Não.
// 3. b) Organizar melhor o código.
// 3. c)
// const exerciseThree = async (): Promise<user[]> => {
//     const response = await axios.get(`${baseUrl}/subscribers`);
//     return response.data.map((res: any) => {
//       return {
//         id: res.id,
//         name: res.name,
//         email: res.email,
//       };
//     });
//   };

// Exercício 4. a) O <void> não tem return.
// 4. b)
// async function createNews(
//     title: string,
//     content: string,
//     date: number
//   ): Promise<void> {
//     await axios.put(`${baseUrl}/news`, {
//       title: title,
//       content: content, 
//       date: date
// });}

// Exercício 5.
// const sendNotifications = async (
//     users: user[],
//     message: string
//   ): Promise<void> => {
  
//     try {
//           for (const user of users) {
//           await axios.post(`${baseUrl}/notifications`, {
//             subscriberId: user.id,
//             message
//           });
//         }
  
//         console.log("All notifications sent");
//       } catch {
//           console.log("Error");
//       }};

// Exercício 6. a) Fazer com que várias funções aconteçam em paralelo.
// 6. b) Não é em ordem ASC
// 6. c)
// const sendNotifications = async (
//     users: user[],
//     message: string
//   ): Promise<void> => {
  
//       try {
//         const promises = users.map(user =>{
//           return axios.post(`${baseUrl}/notifications`, {
//             subscriberId: user.id,
//             message: message,
//           })
//         })
      
//         await Promise.all(promises);
  
//       } catch {
//           console.log("Error");
//       }
//   };




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});