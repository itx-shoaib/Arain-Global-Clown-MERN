const express = require("express");
const router = express.Router();

// Storing model in a variable
const Car = require('../models/car')

// Route 1: Adding a car details by Post method , /api/car/addcar
router.post('/addroom',async(req,res)=>{

    try {
        // Adding car information in database
        const newCar = await Car(req.body)
        // Saving the new car information.
        await newCar.save()
    
        // Sending the response if succeed
        res.send("Car has been successfully added.")
        
    } catch (error) {
        return res.status(400).json({error})
    }
})

module.exports = router;