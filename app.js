const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

const port = 3000;

//set up view engine

app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongoodb');
});
// set up routes

app.use(express.static(__dirname + '/public'));
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
    res.render('home', {user: req.user});
});

app.listen(port,()=> {
    console.log('app now listening for request on port ' + port);
});