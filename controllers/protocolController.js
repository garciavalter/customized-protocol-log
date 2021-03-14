const Protocols = require('../models/protocol-model');
const mongoose = require('mongoose');

/*let data = [
    {
        protocol: 1,
        register:"2010-20019",
        name: "José da Silva Santos"
    },
    {
        protocol: 2,
        register:"2010-20020",
        name: "Marinalva Alessandra Garcia"
    },
    {
        protocol: 1,
        register:"2010-20021",
        name: "Aloisio Siqueira"
    },
]
*/
module.exports = function(app, authCheck){

    app.get('/', authCheck, (req,res) => {
   
        Protocols.find({}, function(err, data){
            if (err) throw err;
            res.render('dashboard',  {protocols: data});
        });
    });
     
    app.post('dashboard', function(req, res){
        res.send('you posted info');
    });

    app.delete('dashboard', function(req,res){

    });
};




