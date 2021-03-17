const Protocols = require('../models/protocol-model');
const mongoose = require('mongoose');


const retrieveData = function(req, res) {
        Protocols.find({}, function(err, data){
            if (err) throw err;
            res.render('dashboard',  {protocols: data});
        });
    };

module.exports  = retrieveData;
     
 /*   app.post('dashboard', function(req, res){
        res.send('you posted info');
    });

    app.delete('dashboard', function(req,res){

    });
};

*/