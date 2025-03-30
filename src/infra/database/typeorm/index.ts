import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user_appointments",
    password: "12wqer43",
    database: "appointments",
    entities: ["./models/*.ts"],
    migrations: ["./migrations./*.ts"],
    synchronize: true,
    logging: true,
})