const express = require('express');
const router = express.Router();

const Booking = require('../models/booking');
const Car = require('../models/car')

// Booking a car by POST method PATH: /api/booking/bookcar
router.post('/bookcar',async(req,res)=>{

    // This logic is for project
    // const {cars,fromdate,todate,totalamount,totaldays} = req.body

    // try {
        
    //     const newBooking = await Booking({
    //         car:cars.name,
    //         carid:cars._id,
    //         fromdate:fromdate,
    //         todate:todate,
    //         totalamount:totalamount,
    //         totaldays:totaldays
    //     })
    
    //     const booking = await newBooking.save()
    //     const cartemp = await Car.findOne({_id:car._id});
    //     cartemp.currentbookings.push({bookingid:booking._id, fromdate:fromdate, todate:todate, car:car.name, carid: car._id})
    //     await cartemp.save();
    //     res.send("Your car has been booked successfully")

    // } catch (error) {
    //     return res.status(400).json({error})
    // }

    // This logic is to check API through thunderclient.
    try {
        const newBooking = await Booking(req.body)
        await newBooking.save();
        res.send("Your car has been booked successfully")
        
    } catch (error) {
        return res.status(400).json({error})
    }

});

module.exports = router;