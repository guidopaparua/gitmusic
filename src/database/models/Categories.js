module.exports = function(sequelize, dataTypes) {
    const alias = 'Category';

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
        }
    }

    const config = {
        tableName: 'categories',
        timestamps: false
    }

    const Categories = sequelize.define(alias, cols, config);

  //ASSOCIATE

    return Categories
}