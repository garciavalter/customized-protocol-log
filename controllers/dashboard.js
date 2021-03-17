const Protocols = require('../models/protocol-model');

const retrieveData = function(req,res){   
    Protocols.find({}, function(err, data){
        if (err) throw err;
        res.render('dashboard',  {protocols: data});
    });
}

module.exports = retrieveData;
/*
module.exports = function(app, authCheck){
   
    app.get('/import', authCheck, (req,res) => {
        res.send('you reached to the import page');
    })

    
    app.post('dashboard', function(req, res){
        res.send('you posted info');
    });

    app.delete('dashboard', function(req,res){

    });
};
*/



