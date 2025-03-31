import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    // username: "user_appointments",
    username: "root",
    // password: "12wqer43",
    password: "root",
    database: "appointments",
    entities: [__dirname + "/models/**/*.ts"],
    migrations: [__dirname + "/migrations/**/*.ts"],
    synchronize: true,
    logging: true,
})