const { Shop } = require("../../models/shops");

const getShops = async (req, res) => {
  const result = await Shop.find({}).populate("dishes");
  res.json(result);
};

module.exports = getShops;
