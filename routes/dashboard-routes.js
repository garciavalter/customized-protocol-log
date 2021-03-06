const router = require('express').Router();
const { render } = require('ejs');
const dashboardController = require('../controllers/dashboard-controller');

const authCheck = (req,res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req,res) => {
    retrieveData(req, res);
});

router.get('/import', authCheck, (req,res) => {
    res.render('import');
})

module.exports = router;