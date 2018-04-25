var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + value)
        }
    }
    return arr.toString();
}

var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results)
        });
    },

    insertOne: function (tableInput, toCol, newName, cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += ' (';
        queryString += toCol.toString();
        queryString += ') ';
        queryString += "VALUES (";
        queryString += newName + " ?";
        queryString += ') ';
       

        connection.query(queryString, newName, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    
    },


    updateOne: function (tableInput, objColVals, condition, cb) {
        var queryString = "UPDATE " + tableInput;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }

            cb(results);
        });
    },

    delete: function(table, condition, cb){
        var queryString = 'DELETE FROM ' + table;
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function (err, results){
            if (err)
                throw err;
                cb(result);
            
        })
    }
};

module.exports = orm
