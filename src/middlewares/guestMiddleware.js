function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado) {
       return res.redirect('/')
    }
    return next();
}

module.exports = guestMiddleware;