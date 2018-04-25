var orm = require("../config/orm.js");

var baby = {
    selectAll: function(cb){
        orm.selectAll('names', function(res){
            cb(res);
        });
    },
    
    insertOne: function(toCol, newName, cb){
        orm.insertOne('names', toCol, newName, function(res){
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne('names', objColVals, condition, function(res){
            cb(res);
        });
    },

    // deleteOne: function(condition, cb){
    //     orm.delete('names', condition, function(res){
    //         cb(res);
    //     });
    // }
};

module.exports = baby;
