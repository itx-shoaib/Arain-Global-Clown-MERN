const express = require('express');
const router = express.Router();

const Order = require('../models/order');
const Car = require('../models/car');
const Additional = require('../models/additional');

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
        res.send(orderbook)
        
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



// Router:2 Adding addon into in cartdetails array in order model by POST method : /api/order/addtocartdetail
// STATUS : Working
router.post('/addtocartdetail',async(req,res)=>{
    const {orderid,id} = req.body
    try {
        const additional = await Additional.findOne({_id:id})
        const order = await Order.findOne({_id:orderid})
        order.cartdetail.push({additionalid:id,title:additional.title, price:additional.price})
        await order.save();
        res.send(order)

    } catch (error) {
        return res.status(400).json({error})
    }
});

// Router:3 Adding addon into in cartdetails array in order model by POST method : /api/order/deletecartdetail
// STATUS : Path is Working
router.post('/deletecartdetail',async(req,res)=>{
    const {orderid,addonid} = req.body

    try {
        
        const order = await Order.findOne({_id:orderid})
        // order.cartdetail.filter(data => data.title != "PREPAID REFUEL")
        var arr = order.cartdetail
        for (var i = 0; i < arr.length; i++) {
            if( arr[i].additionalid === addonid){
                await arr.splice(i,1);
                console.log(arr[i].additionalid)
                
            }
            

            
        }
        await order.save();
        res.send( order)
    } catch (error) {
        return res.status(400).json({error})
    }
});

module.exports = router;