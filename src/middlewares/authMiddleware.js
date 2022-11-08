function authMiddleware(req, res, next) {
    if (!req.session.usuarioLogueado) {
       return res.redirect('/register')
    }
    return next();
}

module.exports = authMiddleware;