const express = require("express")
const ProductRoutes = require("./Routes/ProductsRoutes")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()
mongoose.connect('mongodb://localhost:27017/FHABackend', {useNewUrlParser: true});
mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(ProductRoutes)
app.listen(5001 , () => {
    console.log("app is running")
})
module.exports = app