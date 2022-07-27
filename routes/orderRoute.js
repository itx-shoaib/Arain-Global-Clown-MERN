const express = require('express');
const router = express.Router();

const Order = require('../models/order');
const Car = require('../models/car');

// Route:1 Getting order dates in order Model by POST method : /api/order/takeorderdate
// STATUS: Working
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

// Router:2 Adding car info in cart array inn order model by POST method : /api/order/addtocart
// STATUS : Working
router.post('/addtocart',async(req,res)=>{
    const {id,car} = req.body

    try {
        const cars = await Car.findOne({_id:car});
        const order = await Order.findOne({_id:id});
        order.cart.push({car:cars._id, name : cars.name , rentperday:cars.rentperday, image : cars.image})
        await order.save();
        const temp ={
            car : cars._id,
            id: order._id,
            name : cars.name,
            rentperday:cars.rentperday,
            image : cars.image
        }
        res.send(temp)
    } catch (error) {
        return res.status(400).json({error})
    }
});

module.exports = router;