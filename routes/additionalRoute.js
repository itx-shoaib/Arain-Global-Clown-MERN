const express = require('express');
const router = express.Router();

const Additional = require('../models/additional');
const Booking = require('../models/booking');
const Car = require('../models/car')

// Router 1: Adding a addon by POST method PATH: /api/addon/addinformation
// Status: Working
router.post('/addinformation',async(req,res)=>{
    try {
        const additional = await Additional(req.body)
        await additional.save()
        res.send("Your addon has been added successfully")
        
    } catch (error) {
        return res.status(400).json({error})
    }
});

// Router 2: Getting a addon by GET method PATH: /api/addon/getallinformation
// Status: Working
router.get('/getallinformation',async(req,res)=>{
    try {
        const additional = await Additional.find({})
        res.send(additional)
    } catch (error) {
        return res.status(400).json({error})
    }
});

// Router 3: Adding a addon in booking model by POST method PATH: /api/addon/addaddon
// Status: Path is Working
router.post('/addaddon',async(req,res)=>{
    const {title,price} = req.body
    try {
        const additional = await Car.findOne({id:car._id})
        additional.addon.push({title:title,price:price})
        res.send("Your addon has been successfully added")
    } catch (error) {
        return res.status(400).json({error})
    }
})
module.exports = router;