const express = require('express');
const router = express.Router();

const Order = require('../models/order');

// Route:1 Getting order dates in order Model by POST method : /api/order/takeorderdate
// STATUS: Path is Working
router.post('/takeorderdate',async(req,res)=>{
    const { formdate,todate } = req.body
    try {
        const orderdate = new Order({
            startdate:formdate,
            enddate:todate
        })

        const orderbook = await orderdate.save();
        res.send(orderbook._id)
        
    } catch (error) {
        return res.status(400).json({error})
    }
});

module.exports = router;