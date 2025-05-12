'use strict'

import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import { dbConnection } from "./mongo.js"
import apiLimiter from "../src/middlewares/rate-limit-validator.js"
import comentRouter from "../src/comentarios/coment.routes.js"
import publicRouter from "../src/publicaciones/public.routes.js"
import { swaggerDocs, swaggerUi } from "./swagger.js"

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
};

const routes = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    app.use("/BlogDeAprendizaje/v1/Comentarios", comentRouter)
    app.use("/BlogDeAprendizaje/v1/Publicaciones", publicRouter)
}

const conectarDB = async () => {
    try {
        await dbConnection()
    } catch (err) {
        console.log(`Database connection failed: ${err}`);
        process.exit(1);
    }
}

export const initServer = async () => {
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        const port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log(`Server is running on port ${port} matutina`)
        })
    } catch(err){
        console.log(`Server initialization failed: ${err}`)
    }
}