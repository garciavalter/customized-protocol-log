const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

const port = 3000;

//set up view engine

app.set('view engine', 'ejs');

// set up routes

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port,()=> {
    console.log('app now listening for request on port ' + port);
});