function guestMiddleware (req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
    } else {
        res.send('Esta pagina es solo para invitados')
    }
    next();
}

module.exports = guestMiddleware;