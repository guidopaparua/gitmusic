module.exports = function (sequelize, dataTypes) {
    const alias = 'Order';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        state: {
            type: dataTypes.STRING(1)
        },
        coments: {
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

    Orders.associate = function (models) {

        Orders.belongsTo(models.User, {

            as: "users",

            foreingKey: "users_id"

        });
        Orders.belongsToMany(models.Product, {

            as: "products",

            through: 'orders_has_products',

            foreignKey: "order_id",

            otherKey: 'product_id',

            timestamps: false

        });

    }
    return Orders
}