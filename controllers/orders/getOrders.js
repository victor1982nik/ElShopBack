const { Order } = require("../../models/orders");

const getOrders = async (req, res) => {
  const result = await Order.find({});
  res.json(result);
};

module.exports = getOrders;
