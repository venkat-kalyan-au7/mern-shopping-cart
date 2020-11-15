import express from "express"
import morgan from "morgan"
import validator from "express-validator"
import path from "path"

const app = express()

import ProductRoutes from "./Routes/ProductRoutes.js"

import errorHandler from "./middlewares/errorHandler.js"

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('tiny'))
app.use(validator())
app.use(errorHandler)

app.use('/api/products',ProductRoutes)


if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'))
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", 'index.html'))
    })
}


export default app
