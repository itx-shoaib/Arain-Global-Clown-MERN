const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    startdate:{
        type: String,
        required:true
    },
    enddate:{
        type: String,
        required: true
    },
    cart:[],
    cartdetail:[]

},{
    timestamps : true,
})

const ordermodal = mongoose.model('orders',orderSchema)

module.exports = ordermodal