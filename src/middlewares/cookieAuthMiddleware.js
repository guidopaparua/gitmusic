function rememberMiddleware(req, res, next) {
    next();
    if (req.cookies.remember != undefined && req.session.usuarioLogueado == undefined) {
        // if (errors.isEmpty()) {
        //     let user = db.User.findOne({
        //             where: {
        //                 email: req.body.email
        //             }
        //         })

        //     for (let i = 0; i < user.length; i++) {
        //         if (user[i].email == req.cookies.remember) {
        //             if (req.body.password == user.password) {
        //                 let usuarioALoguearse = user[i];
        //                 break
        //             }
        //         }
        //     }
        //     if (usuarioALoguearse == undefined) {
        //         return res.render('login', {errors: [
        //             {msg: 'Usuario y/o contraseña inválidos'}
        //         ]});
        //     }
        //     req.session.usuarioLogueado = usuarioALoguearse;
        // } else {
        //     return res.render('login', {
        //         errors: errors.errors
        //     });
        // }
    }
}

module.exports = rememberMiddleware;