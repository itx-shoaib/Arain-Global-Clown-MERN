const express = require('express');
const router = express.Router();

// Route:1 
router.post('',(req,res)=>{
    res.send("Hello")
});

module.exports = router;