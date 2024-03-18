// the contoller is the middleman between the data and the route or view 
// import data from Grocery.js modules file
const Grocery = require('../models/grocery');

// we have to export this model
// its a arrow function for now
// it will be a synchronous function later
// this is the getAllGroceries controller

exports.getAllGroceries = (req, res, next) => {
  res.send(Grocery.fetchAll());
};

// This is fetched synchronously
// we will add a try catch block to handle any errors that happen
exports.getAllGroceries = async (req, res, next) => {
    try {
      const [allGroceries] = await Grocery.fetchAll();
      res.status(200).json(allGroceries);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };