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

module.exports = {
    create_product
}