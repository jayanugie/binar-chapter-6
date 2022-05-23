const error = (err, req, res, next) => {
    console.log(err.toString());
    return res.status().json({ message: 'An error occured'});
}

module.exports = {
    error,
}