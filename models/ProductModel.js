import mongoose from "mongoose"


const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    description:{

        type:String,
        required:true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
      },
      countInStock: {
        type: Number,
        required: true,
        default: 0,
      },
})

const Product = mongoose.model('Product',productSchema)
export default Product