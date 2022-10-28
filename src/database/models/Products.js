module.exports = function(sequelize, dataTypes) {
    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL
        }
    }

    const config = {
        tableName: 'Products',
        timestamps: false
    }

    const Products = sequelize.define(alias, cols, config);

  //ASSOCIATE

    return Products
}