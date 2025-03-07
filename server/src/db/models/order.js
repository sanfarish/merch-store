'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    total: DataTypes.INTEGER,
    bill: DataTypes.STRING,
    delivery: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    underscored: true
  })
  return Order
}
