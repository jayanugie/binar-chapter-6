const router = require('express').Router();
const main = require('../controllers/main');
const dashboard = require('../controllers/dashboard');
const users = require('../controllers/users');
const biodata = require('../controllers/biodata');

// DASHBOARD
router.get('/dashboard', dashboard.showDashboard);

// USERS
router.post('/users', users.createUser);
router.get('/users/create', users.addUserPage);
router.post('/users/update/:id', users.updateUser);
router.get('/users/delete/:id', users.deleteUser);
router.get('/users/update/:id', users.updateUserPage);

// BIODATA
router.post('/biodata', biodata.addBiodata);
router.get('/biodata/create', biodata.addBiodataPage);
router.post('/biodata/update/:id', biodata.updateBiodata);
router.get('/biodata/update/:id', biodata.updateBiodataPage);
router.get('/biodata/delete/:id', biodata.deleteBiodata);

// MAIN
router.get('/', main.home);
router.get('/game', main.game);
router.get('/login', main.login);


module.exports = router;