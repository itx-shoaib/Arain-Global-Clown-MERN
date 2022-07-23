const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    door: {
        type: Number,
        required: true
    },
    milage: {
        type: String,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    imageurls : [],
    currentbookings: [],
    driver1:[],
    driver2:[],
    cleaning:[],
    refuel:[],
} , {
    timestamps : true,
})

const carModal = mongoose.model('cars',carSchema)

module.exports = carModal