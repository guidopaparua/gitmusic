module.exports = function(sequelize, dataTypes) {
    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        first_name: {
            type: dataTypes.STRING,
            allownull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allownull: false
        },
        email: {
            type: dataTypes.STRING,
            allownull: false
        },
        password: {
            type: dataTypes.STRING,
            allownull: false
        },
        admin: {
            type: dataTypes.BOOLEAN,
            allownull: false
        }
    }

    const config = {
        tableName: 'users',
        timestamps: false
    }

    const Users = sequelize.define(alias, cols, config);

    //ASSOCIATE

    Users.associate = function(models){
    
        Users.belongsTo(models.Order,{

            as: "orders",

            foreingKey: "users_id"

        });

    }

    return Users
}

const fs = require('fs');

const User = {
    fileName: '../data/usersDataBase.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;
