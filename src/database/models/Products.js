module.exports = function(sequelize, dataTypes) {
    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(180),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER 
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        category: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    }

    const config = {
        tableName: 'products',
        timestamps: false
    }

    const Products = sequelize.define(alias, cols, config);

  //ASSOCIATE

    return Products
}