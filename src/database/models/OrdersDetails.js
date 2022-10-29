module.exports = function(sequelize, dataTypes) {
    const alias = 'OrdersDetails';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: false
        },
        order_id:{
            type: dataTypes.STRING(1)
        },
        cantidad:{
            type: dataTypes.STRING(1)
        },
        product_id:{
            type: dataTypes.STRING(1)
        },
    }

    const config = {
        tableName: 'ordersDetails',
        timestamps: false
    }

    const OrdersDetails = sequelize.define(alias, cols, config);

  //ASSOCIATE

    return OrdersDetails
}