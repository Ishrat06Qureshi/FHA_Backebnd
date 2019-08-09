const express = require("express")
const ProductRoutes= express.Router();

const Products = require("../Models/Products")


// create the product

ProductRoutes.post("/products/createProducts" , ( req , res ) => {
      const { ProductCode ,  Description} =  req.body
      Products.findOne({ProductCode : req.body.ProductCode}).
          then(( product) => {
               if( product ) {
                    return  res.status(400).send({msg:"product with this code already exist" , error:true})
                    } 
        })

        Products.create({ ProductCode , Description}).then(() => {
           
           return  res.status(400).send({msg:"successfully added the Product" , error: false})
        })
  })


//update a Product
 

//delete a Product
ProductRoutes.delete("/products/deleteProducts/:id",( req,res) => {
    
    Products.findByIdAndRemove({_id:req.params.id}).
    then(( data )=>{
      res.status(200).send({msg:` product with the code ${req.params.id} deleted` , error:false})
    }).catch( err =>  console.log( err ))
})  


// get all Products
ProductRoutes.get("/products/getProducts",( req,res) => {
    Products.find({}).then(( data )=>{
        if(data){
           return  res.status(200).send(data)
         }
         else{
            return  res.status(404).send(json({Error:"no data found"}))
         }
    }).catch( err => { 
        console.log( err );
        return  res.status(400).send(err)
    })
    
})

module.exports = ProductRoutes