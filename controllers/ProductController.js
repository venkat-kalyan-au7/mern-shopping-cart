import Product from "../models/ProductModel.js"

import asyncHandler from 'express-async-handler'

const createProduct = (req, res) => {
  
	
	  
		const newProduct = new Product({
			name: req.body.name,
			price: req.body.price,
			quantity: req.body.quantity,
			description: req.body.description,
			image: req.body.image
		});
		newProduct
			.save()
			.then(newProduct => res.send(newProduct))
			.catch(err => {
				return res.status(400).json(err);
			});
	}


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