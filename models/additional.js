const mongoose = require('mongoose');

const additionalSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }

},{
    timestamps : true,
})

const additionalmodal = mongoose.model('additionals',additionalSchema)

module.exports = additionalmodal