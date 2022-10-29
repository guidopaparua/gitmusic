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
            type: dataTypes.BOOLEAN
        }
    }

    const config = {
        tableName: 'users',
        timestamps: false
    }

    const Users = sequelize.define(alias, cols, config);

    //ASSOCIATE

    Users.associate = function(models){
    
        Users.belongsTo(models.Orders,{

            as: "orders",

            foreingKey: "users_id"

        });

    }

    return Users
}