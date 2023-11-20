const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    dateCreated: {
        required: true,
        type: String
    },
    availability: {
        required: true,
        type: Number
    },
    fileName: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: Number
    }
}
);

const productDetails = mongoose.model('productDetails', productSchema, 'ecommerce_products');
module.exports = productDetails;