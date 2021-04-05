const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require cercei routes

const produseRoutes    = require('./routes/produse.routes');
const comenziRoutes    = require('./routes/comenzi.routes');
const comenziProduseRoutes    = require('./routes/comenziProduse.routes');
const userAdminRoutes    = require('./routes/userAdmin.routes');

// using as middleware

app.use('/api/produse', produseRoutes)
app.use('/api/comenzi', comenziRoutes)
app.use('/api/comenziProduse', comenziProduseRoutes)
app.use('/api/userAdmin', userAdminRoutes)


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});