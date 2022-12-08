const mongoose = require('mongoose');

const coinsSchema=new mongoose.Schema({
    symbol: {
        type: String,
        unique: true, 
        required: true,
        },

    name: {
        type: String,
        unique: true,  
        required: true,
    },
        
    marketCapUsd: String,
    priceUsd: String,    
}, { timesstamps: true})

module.exports = mongoose.model('coin',coinsSchema) 