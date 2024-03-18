// this is were we will handle the stucture of our data
// this is were we perform any operations with our data like fetching it or something like that
// we may want to do this asynchronously

// const database = require("../util/database");

// we want to export this class
// this class is the structure of our data
// in this case the class is Grocery
// a class can have a constructor
// a constructor is just what happens when a class is initialized
// what we are doing is we are setting the new instance of a Grocery listen
// lets say we want to add a new Grocery item
// we can say this.id = id
// and this.item = item

// then if you want to create a new Grocery instance or we want to add a new Grocery
// when we call that class Grocery
// we call the constructor we will be able to pass in two arguments to it and set a particular Grocery
// so thats jus some object orient programing stuff

// also what we'll do is we'll make it so we don'nt have to instamtiate a new Grocery object 
// its going to be able to fetch all the data 
// rather than you know using the new keyword and creating a new Grocery, Grocery 1 , Grocery 2 and all that
// we can create a static method 
// the static method is something we can call om the class itself rather than the instance of the class 
// it will come in handy if we want to return data for all of the Groceries 
// rather than creating a new instance of that object 

// interact with the database
const db = require('../util/database');

module.exports = class Grocery {
    constructor(id, item) {
        this.id = id;
        this.item = item;
    }

// static way 
// Hard Coded
//     static fetchAll() {
//         return [
//             {
//                 id: 1,
//                 item: 'milk',
//             },
//             {
//                 id: 2,
//                 item: 'bread',
//             },
//         ];
//     }
// };

// This execute the mysql querie
// And it selects all
static fetchAll() {
    return db.execute('SELECT * FROM groceries');
  }
};