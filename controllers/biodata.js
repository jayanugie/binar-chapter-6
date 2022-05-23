const { Biodata } = require('../models');


// MENAMBAH BIODATA
function addBiodata(req, res) {
    Biodata.create({
        id_user: req.body.id_user,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    })
    return res.redirect('/dashboard');
}


// HALAMAN ADD BIODATA
function addBiodataPage(req, res) {
    res.render('create-biodata.ejs');
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
        res.render('update-biodata.ejs', {
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