const express = require('express');
const router = express.Router();

const Booking = require('../models/booking');
const Car = require('../models/car')
const Checkout = require('../models/checkout');

// Booking a car by POST method PATH: /api/booking/bookcar
// STATUS: WORKING (BUG : fromdate and todate store as ""20-12-2022"" in db)
router.post('/bookcar',async(req,res)=>{

    const {cars,carid,fromdate,todate,totalamount,totaldays} = req.body

    try {
        
        const newBooking = await Booking({
            car:cars.name,
            carid:carid,
            fromdate:fromdate,
            todate:todate,
            totalamount:totalamount,
            totaldays:totaldays
        })
    
        const booking = await newBooking.save()
        const cartemp = await Car.findOne({_id:carid});
        cartemp.currentbookings.push({bookingid:booking._id, fromdate:fromdate, todate:todate, car:cars.name, carid: carid})
        const save = await cartemp.save();
        if (save) {
            const id = booking._id;
            res.send(id);
        }
        res.send("Your car has been booked successfully")

    } catch (error) {
        return res.status(400).json({error:error})
    }

});

// Saving a checkout form by POST method PATH: /api/booking/checkout
// STATUS: Working 
router.post('/checkout',async(req,res)=>{
 
    const checkout = new Checkout({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        town: req.body.town,
        state: req.body.state,
        phone: req.body.phone,
        email: req.body.email,
        orderid : req.body.id,
        price : req.body.price,
        day : req.body.days,
        name : req.body.carname,
        addon1 : req.body.addon1,
        addon2 : req.body.addon2,
        addon3 : req.body.addon3,
        addon4 : req.body.addon4

    })

    try {
        const newCheckout = await checkout.save()
        res.send('Your form has been successfully saved.')
        
    } catch (error) {
        return res.status(400).json({error})
    }
});

module.exports = router;