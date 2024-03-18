// we created a node sever and we are using express
// we have this sever that is constantly listening for requests
// if we hit the endpoint of the website slash groceries
// we are using the MVC pattern
// we restructured our get request so its more scalable for our crud application

// gets express in our application
const express = require('express');

// gets bodyParser in our application
const bodyParser = require('body-parser'); 

// Route require
const groceryRoutes = require('./routes/grocery');

// to add the error controller file here
const errorController = require('./controllers/error');

// initialize our app and we can do that by using express as a method
const app = express();

// define the ports, if you were to deploy this to a paid sever they will have their own ports they are using
const ports = process.env.PORT || 3000;

// Return Data
// const groceries = [
//     {
//         id: 1,
//         item: 'milk'
//     },
//     {
//         id: 2,
//         item: 'bread'
//     },
// ];
 
// this is to use bodyParser package in json format
app.use(bodyParser.json());

// to create headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// route
// this is a endpoint /groceries 
app.use('/groceries', groceryRoutes);

// GET method to get information from the sever
// app.get('/', (req, res) => {
//     res.send(groceries);
// });

// GET method to get information from the sever
// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// This is when page is not found error
// can do this by calling our error controller
app.use(errorController.get404);

app.use(errorController.get500);

// start the server we can listen
// app.listen(3000,() => console.log(`listening on port 3000`));
app.listen(ports,() => console.log(`listening on port ${ports}`));

// to run our application or to run our server, enter this in the terminal "node" and name of file you want to run in this case is "index.js" example "node index.js"
// after each change you made rerun the application if you want to test and see