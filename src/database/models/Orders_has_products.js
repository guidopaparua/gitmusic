module.exports = function (sequelize, dataTypes) {
    const alias = 'Orders_has_product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        order_id: {
            type: dataTypes.STRING(1)
        },
        cantidad: {
            type: dataTypes.STRING(1)
        },
        product_id: {
            type: dataTypes.STRING(1)
        },
    }

    const config = {
        tableName: 'orders_has_products',
        timestamps: false
    }

    const Orders_has_product = sequelize.define(alias, cols, config);

    //ASSOCIATE


    return Orders_has_product
}