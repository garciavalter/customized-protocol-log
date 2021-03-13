const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(new GoogleStrategy(
    {
        //options for google strategy\
        clientID: keys.google.clientIDclientID,
        clientSecret: keys.google.clientSecret

    }), () => {
        //passport callback function
    }
);
