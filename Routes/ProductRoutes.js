import express from 'express'
const router = express.Router()

import {createProduct,
getProducts,
getProductById} from "../controllers/ProductController.js"

import inputValidator from "../middlewares/inputValidator.js"


router.post('/',inputValidator,createProduct)
router.get('/',getProducts)
router.get('/:id',getProductById)


export default router