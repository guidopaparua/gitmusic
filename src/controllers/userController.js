const User = require('../database/models/Users');
const bcryptjs = require('bcryptjs');

const controller = {
    processRegister: (req, res) => {
        let userInDb = User.findByField('email', req.body.email);
        
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        User.create(userToCreate);
        return res.render('login')
    }
}