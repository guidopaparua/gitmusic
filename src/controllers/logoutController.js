const controller = {
    logout: (req, res) => {
        res.clearCookie('userCookie');
        req.session.destroy();
        return res.redirect('/')
    }
};

module.exports = controller;