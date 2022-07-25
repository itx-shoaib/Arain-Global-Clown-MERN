const express = require('express');
const router = express.Router();

const Order = require('../models/order');

// Route:1 Getting order dates in order Model by POST method : /api/order/takeorderdate
// STATUS: Path is Working
router.post('/takeorderdate',async(req,res)=>{
    const { fromdate,todate } = req.body
    try {
        const orderdate = await Order({
            startdate:fromdate,
            enddate:todate
        })
        
        const orderbook = orderdate.save();
        res.send("Your order has been successfully added.")
        
    } catch (error) {
        return res.status(400).json({error})
    }
});

module.exports = router;