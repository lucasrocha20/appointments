import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/User"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [User],
    synchronize: true,
    logging: true,
})