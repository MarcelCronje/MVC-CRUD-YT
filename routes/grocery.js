// adds express in this file
const express = require('express');

// calls the router in a variable
const router = express.Router();

// get request
// this is where we are going to do something if we het that endpoint 
router.get('/', );

// we will need to export this to index.js file
// wich contains the get request and its controller
module.exports = router;