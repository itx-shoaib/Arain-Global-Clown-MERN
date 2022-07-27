const express = require('express');
const router = express.Router();

// Storing model in a variable
const Car = require('../models/car')

// Route 1: Adding a car details by Post method , /api/car/addcar
// Status: Working (tested from thunder client)
router.post('/addcar',async(req,res)=>{

    try {
        // Adding car information in database
        const newCar = await Car(req.body)

        // Saving the new car information.
        await newCar.save()
    
        // Sending the response if succeed
        res.send("Car has been successfully added.")
        
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

// Route 2: Fetching all cars by GET method , /api/car/getallcars
// Status: Working (tested from thunder client)
router.get('/getallcars',async(req,res)=>{
    try {
        // Storing all cars from datbase in cars variable. 
        const cars = await Car.find({})
        res.send(cars);
    } catch (error) {
        return res.status(400).json({error})
    }
})

// Route 3: Fetching a car by id by GET method , /api/car/getcarbyid/:carid
// STATUS: Working
router.get('/getcarbyid',async(req,res)=>{
    // Storing carid from request body.
    const carid = req.params.carid

    try {
        // Geting the car from id.
        const car = await Car.findOne({_id : carid})
        res.send(car);
    } catch (error) {
        return res.status(400).json({error})
    }
})

module.exports = router;