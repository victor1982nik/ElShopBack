const { Order } = require("../../models/orders");

const addOrder = async (req, res) => {
  //const { user, order, total } = req.body;
  //console.log("Add ")

  const order = new Order(req.body);
  await order.save();
  res.status(201).json(req.body);
};

module.exports = addOrder;
