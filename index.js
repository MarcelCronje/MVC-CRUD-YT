// we created a node sever and we are using express
// we have this sever that is constantly listening for requests
// if we hit the endpoint of the website slash groceries
// we are using the MVC pattern
// we restructured our get request so its more scalable for our crud application

// gets express in our application
const express = require('express');

const groceryRoutes = require('./routes/grocery');

// initialize our app and we can do that by using express as a method
const app = express();

// define the ports, if you were to deploy this to a paid sever they will have their own ports they are using
const ports = process.env.PORT || 3000;

// route
// this is a endpoint /groceries 
app.use('/groceries', groceryRoutes);

// start the server we can listen
// app.listen(3000,() => console.log(`listening on port 3000`));
app.listen(ports,() => console.log(`listening on port ${ports}`));

// to run our application or to run our server, enter this in the terminal "node" and name of file you want to run in this case is "index.js" example "node index.js"
// after each change you made rerun the application if you want to test and see