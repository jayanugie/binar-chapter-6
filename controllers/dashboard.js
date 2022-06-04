const { Users, Biodata } = require('../models');

let userData = [];
function showDashboard(req, res) {
    Users.findAll({
        order: [
            ["id", "ASC"]
        ]
    }) 
    .then(users => {
        userData = users;
    });
    Biodata.findAll({
        order: [
            ["id_user", "ASC"]
        ]
    })
    .then(biodata => {
        res.render('dashboard/dashboard.ejs', {
            users: userData,
            biodata: biodata
        });
    });
}

module.exports = {
    showDashboard
}