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
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    orderid:{
        type: String,
        required: true
    },
    price : {
        type : String,
        required : true
    },
    day : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    addon1:{
        type: String,
        default: "No driver"
    },
    addon2:{
        type: String,
        default: "No driver"
    },
    addon3:{
        type : String,
        default: "No Post trip cleaning"
    },
    addon4:{
        type: String,
        default: "No Prepaid refuel"
    }




},{
    timestamps : true,
})

const checkoutmodal = mongoose.model('checkouts',checkoutSchema)

module.exports = checkoutmodal