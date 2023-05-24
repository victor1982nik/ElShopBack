const { Shop } = require("../../models/shops");

const getShops = async (req, res) => {
  const result = await Shop.find({});
  res.json(result);
};

module.exports = getShops;
