/**
 * Created by sanjaymurali on 10/4/16.
 */

// Connection to the DB is established here!

var Sequelize = require('sequelize');

// Change these to reflect your DB.
var database_name = "entertainmentdb";
var username = "root";
var password = "sanjay";
var host_name = "localhost";

var sql = new Sequelize(database_name, username, password, {
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