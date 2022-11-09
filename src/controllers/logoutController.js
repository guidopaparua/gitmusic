const controller = {
    logout: (req, res) => {
        console.log('hola');
        res.clearCookie('userCookie');
        req.session.destroy();
        return res.redirect('/')
    }
};

module.exports = controller;