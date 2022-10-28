module.exports = function(sequelize, dataTypes) {
    const alias = 'Users';

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
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING,
            allownull: false
        },
        password: {
            type: dataTypes.STRING,
            allownull: false
        }
    }

    const config = {
        tableName: 'Users',
        timestamps: false
    }

    const Users = sequelize.define(alias, cols, config);

    //ASSOCIATE

    return Users
}
