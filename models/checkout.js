const mongoose = require('mongoose');

const checkoutSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    town:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    car:{
        type: String,
        required:true
    },
    carid:{
        type: String,
        required: true
    }


},{
    timestamps : true,
})

const checkoutmodal = mongoose.model('checkouts',checkoutSchema)

module.exports = checkoutmodal