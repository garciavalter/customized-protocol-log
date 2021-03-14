const protocol = require('../models/protocol-model');

let data = [
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

module.exports = function(app, authCheck){

    app.get('/', authCheck, (req,res) => {
   
        res.render('dashboard',  {protocols: data});
    
    });
     
    app.post('dashboard', function(req, res){

    });

    app.delete('dashboard', function(req,res){

    });
};




