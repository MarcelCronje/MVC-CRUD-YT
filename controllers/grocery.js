const Grocery = require('../models/grocery');

exports.getAllGroceries = (req, res, next) => {
  res.send(Grocery.fetchAll());
};