// adds express in this file
const express = require('express');


// we need to have a controller in here 
// but for now we can use a router from the express package
// make a router

// we imported this controller from controllers Grocery.js file
const groceryController = require('../controllers/grocery');

// calls the router in a variable
const router = express.Router();

// get request
// this is where we are going to do something if we het that endpoint 
router.get('/', groceryController.getAllGroceries);

// post request
router.post('/', groceryController.postGrocery);

// put request
router.put('/', groceryController.putGrocery);

// delete request
router.delete('/:id', groceryController.deleteGrocery);

// we will need to export this to index.js file
// wich contains the get request and its controller
module.exports = router;