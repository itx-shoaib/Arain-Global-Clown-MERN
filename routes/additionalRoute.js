const express = require('express');
const router = express.Router();

const Additional = require('../models/additional')

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
})
module.exports = router;