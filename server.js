const connectToMongo = require('./db');
const express = require('express');


connectToMongo();

const app = express()
const port = 5000


app.listen(port, () => {
  console.log(`Arain Global listening on port ${port}`)
})