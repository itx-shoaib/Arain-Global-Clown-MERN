const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    car:{
        type: String,
        required:true
    },
    carid:{
        type: String,
        required: true
    },
    fromdate:{
        type: String,
        required: true
    },
    todate:{
        type: String,
        required: true
    },
    totaldays:{
        type: Number,
        required: true
    },
    totalamount:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "booked"
    }


},{
    timestamps : true,
})

const bookingmodal = mongoose.model('bookings',bookingSchema)

module.exports = bookingmodal