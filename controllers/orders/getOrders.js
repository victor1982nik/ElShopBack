const { Order } = require("../../models/orders");

const getOrders = async (req, res) => {
  const email = req.query.email;
  const filters = {};
  if (email) {
    filters["user.email"] = email;
  }
  //const result = await Order.find({});
  //const result = await Order.find({ "user.email": email });
  const result = await Order.find(filters);
  res.json(result);
};

module.exports = getOrders;
