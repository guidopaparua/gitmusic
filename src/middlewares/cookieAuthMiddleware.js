const db = require('../database/models/');

function cookieAuthMiddleware(req, res, next) {
    next();
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        let user = db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user.email == req.cookies.recordame) {
            usuarioALoguearse = user;
        }
    }
    req.session.usuarioLogueado = usuarioALoguearse;
}
module.exports = cookieAuthMiddleware;