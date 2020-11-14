import Product from "../models/ProductModel.js"

import asyncHandler from 'express-async-handler'

const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      countInStock: req.body.countInStock,
      description: req.body.description,
    })
  
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  })

// Get all products

const getProducts = asyncHandler(async (req, res) => {
    
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Product.countDocuments({ ...keyword })
    const products = await Product.find({ ...keyword })
      
  
    res.json( products )
  })


// Get single product

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({
          message:"Product Not Found"
      })
     
    }
  })


export {
    createProduct,
    getProducts,
    getProductById
}