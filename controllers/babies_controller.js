var express = require("express");
var router = express.Router();
var baby = require('../models/babies.js');

router.get("/", function (req, res) {
    baby.selectAll(function (data) {
        var hbsObject = {
            names: data
        };

        res.render('index', hbsObject);
    });
});

router.post('/api/names', function (req, res) {

    baby.insertOne("name", [req.body.name], function (result) {
        res.json({ id: result.insertId });
    });
    console.log("post up " + req.body.name)
});

router.put('/api/names/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);

    baby.updateOne({
        listIt: req.body.listIt
    },
        condition, function (result) {
            if (result.affectedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// router.delete('/names/delete/:id', function(req, res){
//     var condition = 'id = ' + req.params.id; name.delete(condition, function(){
//         res.redirect('/');
//     })
// })
module.exports = router