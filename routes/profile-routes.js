const router = require('express').Router();
const protocolController = require('../controllers/protocolController');

const authCheck = (req,res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

protocolController(router, authCheck);

module.exports = router;