const express = require('express');
const router = express.Router();

// Route:1 Getting order dates in order Model by POST method : /api/order/takeorderdate
// STATUS: Path is Working
router.post('/takeorderdate',(req,res)=>{
    res.send("Hello")
});

module.exports = router;