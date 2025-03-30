import { start } from "./infra/api/fastifyServer";
import { AppDataSource } from "./infra/database/typeorm";

AppDataSource.initialize()
    .then(() => {
        console.log("Db inicialized")
    })
    .catch((error) => console.log(error))

start();