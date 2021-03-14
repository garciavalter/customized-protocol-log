const protocol = require('../models/protocol-model');

module.exports = function(app){

    app.get('/dashboard', function(req, res){
        res.render('todo', {});
    });
    
    app.post('/dashboard', function(req, res){

    });

    app.delete('/dashboard', function(req,res){

    });
};




