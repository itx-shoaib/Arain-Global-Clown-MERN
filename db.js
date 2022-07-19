const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shoaib:shoaibjamil43@cluster0.gxfrpaw.mongodb.net/merns-arainglobal"

const connectToMongo = ()=>{
    // using mongoose function to connect and giving uri.
    mongoose.connect(mongoURI, ()=>{
        // Call back it when it is connected.
        console.log("MongoDB has been connected successfully");
    })
}

module.exports = connectToMongo;