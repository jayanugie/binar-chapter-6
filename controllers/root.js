const home = (req, res) => {
    return res.render('index.ejs');
}

const game = (req, res) => {
    return res.render('game.ejs');
}

const login = (req, res) => {
    return res.render('login.ejs');
}

module.exports = {
    home, game, login
}