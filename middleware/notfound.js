const notFound = (req, res, next) => {
    return res.status(404).render('notfound');
}

module.exports = {
    notFound,
}