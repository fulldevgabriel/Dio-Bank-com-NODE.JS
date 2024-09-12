import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/databse/db.sqlite",
    migrations: [
        "./src/database/migrations"
    ],
})