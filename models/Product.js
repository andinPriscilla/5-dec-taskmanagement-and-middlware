const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    product_name:{
        type: String,
        require:true,
    },
    product_price: {
        type: Number,
        require:true,
    }
})

const products = mongoose.model('products',schema);

async function create_product(product_name, product_price) {
    const new_product = new products({
        product_name,
        product_price
    })
    return await new_product.save()
}

async function read_product(product_name, product_price){
    const product = await products
    .find()
    .select(["_id","product_name","product_price"])

    return product;
}  

async function updateProduct(productId,{product_name, product_price}){
    return await product.findByIdAndUpdate(productId,{product_name, product_price})
}

module.exports = {
    create_product,
    read_product
}