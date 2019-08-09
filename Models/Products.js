const mongoose =  require("mongoose")
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
    ProductCode:{
        type:String,
        required: [true , "Product Code is required"]
    },
     Description:{
        type:String,
        required: [true , "Description is required"]
    },
    
})
const Products = mongoose.model("ProductsSchema" ,ProductsSchema)
module.exports = Products