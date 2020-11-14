import express from "express"
import morgan from "morgan"
import validator from "express-validator"

const app = express()

import ProductRoutes from "./Routes/ProductRoutes.js"
import uploadRoutes from "./Routes/uploadRoutes.js"
import errorHandler from "./middlewares/errorHandler.js"

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('tiny'))
app.use(validator())
app.use(errorHandler)

app.use('/api/products',ProductRoutes)

app.use('/api/upload', uploadRoutes)

export default app
