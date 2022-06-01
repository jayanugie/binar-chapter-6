const { Biodata } = require('../models');


// MENAMBAH BIODATA
function addBiodata(req, res) {
    Biodata.create({
        id_user: req.body.id_user,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    })
    .then(() => {
        res.redirect('/dashboard');
    })
    .catch(err => {
        res.status(404).send(`User ID doesn't exist in users table, <a href='/dashboard'>use the right one.</a>`)
    });
}


// HALAMAN ADD BIODATA
function addBiodataPage(req, res) {
    res.render('biodata/create-biodata');
}


// UPDATE BIODATA
function updateBiodata(req, res) {
    Biodata.update({
        id_user: req.body.id_user,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }, {
        where: { id: req.params.id }
    });
    return res.redirect('/dashboard');
}


// HALAMAN UPDATE BIODATA
function updateBiodataPage(req, res) {
    Biodata.findOne({
        where: { id: req.params.id }
    })
    .then(biodata => {
        res.render('biodata/update-biodata', {
            biodata
        });
    });
}


// DELETE BIODATA
function deleteBiodata(req, res) {
    Biodata.destroy({
        where: { id: req.params.id }
    })
    return res.redirect('/dashboard');
}


module.exports = {
    addBiodata,
    addBiodataPage,
    updateBiodata,
    updateBiodataPage,
    deleteBiodata
}