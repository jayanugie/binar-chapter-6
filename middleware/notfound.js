const notFound = (req, res, next) => {
    return res.status(404).render('error/notfound');
}

module.exports = {
    notFound,
}