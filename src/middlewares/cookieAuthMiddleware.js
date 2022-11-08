const db = require('../database/models/');

async function cookieAuthMiddleware(req, res, next) {
    res.locals.isLogued = false;

    let userCookie = await db.User.findOne({
        where: {
            email: req.cookies.userCookie ? req.cookies.userCookie : ''
        }
    })
    if (userCookie) {
        req.session.usuarioLogueado = userCookie
    }
    if (req.session && req.session.usuarioLogueado) {
        res.locals.isLogued = true;
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
    }
    return next();
}

module.exports = cookieAuthMiddleware;