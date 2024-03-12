const express = require('express');

const groceryRoutes = require('./routes/grocery');

const app = express();

const ports = process.env.PORT || 3000;

app.use('/groceries', groceryRoutes);

app.listen(ports,() => console.log(`listening on port ${ports}`));