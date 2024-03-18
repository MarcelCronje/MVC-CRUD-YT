// add the mysql2 package here
const mysql = require('mysql2');

// call in the config file here
const config = require('../config/config.json');

// const { Connection } = require('mysql2/typings/mysql/lib/Connection') this is not needed for some reason

// This is how you create a connection to mysql
// create a pool, create a connection to the pool
const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
});

// export this to access this pool when we do our queries
module.exports = pool.promise();