const express = require('express');
const app = express();
const port = 3000;

//set up view engine

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port,()=> {
    console.log('app now listening for request on port ' + port);
});