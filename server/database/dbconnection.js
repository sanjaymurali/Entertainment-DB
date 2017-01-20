/**
 * Created by sanjaymurali on 10/4/16.
 */

// Connection to the DB is established here!

var Sequelize = require('sequelize');

// Change these to reflect your DB.
var database_name = "edb";
var username = "root";
var password = "root";
var host_name = "mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306";

var sql = new Sequelize(process.env.JAWSDB_URL, {
    host: host_name,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        timestamps: false //to avoid adding timestamp based columns to table
    }
});

sql.authenticate().then(function (err) {
    console.log('Connection has been established successfully.');
})
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

sql.getHost = function(){
    return host_name;
}


module.exports = sql;