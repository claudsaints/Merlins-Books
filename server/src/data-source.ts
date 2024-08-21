import "reflect-metadata"
import { DataSource } from "typeorm"
import Users from "./entity/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
.then(() => console.log("Conectado ao banco"))
.catch((err) => console.log("ocorreu um erro: ", err))

export default AppDataSource;