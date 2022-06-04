const home = (req, res) => {
    return res.render('main/index.ejs');
}

const game = (req, res) => {
    return res.render('main/game.ejs');
}

const login = (req, res) => {
    return res.render('main/login.ejs');
}

module.exports = {
    home, game, login
}