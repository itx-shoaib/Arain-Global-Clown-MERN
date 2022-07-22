const connectToMongo = require('./db');
const express = require('express');


connectToMongo();

const app = express()
const port = 5000


const carRoute = require('./routes/carRoute')
const bookRoute = require('./routes/bookingRoute')
const additionalRoute = require('./routes/additionalRoute')

app.use(express.json())
app.use('/api/car' , carRoute);
app.use('/api/booking' , bookRoute);
app.use('/api/addon' , additionalRoute);


app.listen(port, () => {
  console.log(`Arain Global listening on port ${port}`)
})