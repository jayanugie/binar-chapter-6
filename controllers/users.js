const { Users, Biodata } = require('../models');

let userData = [];

// DASHBOARD
function dashboard(req, res) {
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
        res.render('dashboard.ejs', {
            users: userData,
            biodata: biodata
        });
    });
}


// MENAMBAH USER
function createUser(req, res) {
    Users.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(() => {
        res.redirect('/dashboard');
    })
    .catch(err => {
        res.status(404).send(`Username already has one, <a href='/dashboard'>use another name.</a>`);
    });
}


// HALAMAN ADD USER
function addUserPage(req, res) {
    return res.render('create-users.ejs');
}


// MENGUPDATE USER
function updateUser(req, res) {
    Users.update({
        username: req.body.username,
        password: req.body.password
    }, {
        where: { id: req.params.id }
    });
    return res.redirect('/dashboard');
}


// HALAMAN UPDATE USER
function updateUserPage(req, res) {
    Users.findOne({
        where: { id: req.params.id }
    })
    .then(users => {
        res.render('update-users.ejs', {
            users
        });
    });
}

// MENGHAPUS DATA USERS SEKALIGUS BIODATA
function deleteUser(req, res) {
    Biodata.destroy({
        where: { id_user: req.params.id }
    });
    Users.destroy({
        where: { id: req.params.id }
    });
    return res.redirect('/dashboard');
}    


module.exports = {
    dashboard,
    createUser,
    addUserPage,
    updateUser,
    updateUserPage,
    deleteUser
}
