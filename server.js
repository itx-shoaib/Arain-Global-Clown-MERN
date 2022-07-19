const connectToMongo = require('./db');
const express = require('express');


connectToMongo();

const app = express()
const port = 5000

const dbconfig = require('./db')
const carRoute = require('./routes/carRoute')

app.use(express.json());
app.use('/api/car' , carRoute)


app.listen(port, () => {
  console.log(`Arain Global listening on port ${port}`)
})