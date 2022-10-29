module.exports = function(sequelize, dataTypes) {
    const alias = 'Orders';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        state:{
            type: dataTypes.STRING(1)
        },
        coments:{
            type: dataTypes.STRING(200)
        },
        users_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allownull: false
        }
    }

    const config = {
        tableName: 'orders',
        timestamps: false
    }

    const Orders = sequelize.define(alias, cols, config);

  //ASSOCIATE

  Orders.associate = function(models){
    
    Orders.hasMany(models.Users,{

        as: "Users",

        foreingKey: "users_id"

    });

}

    return Orders
}