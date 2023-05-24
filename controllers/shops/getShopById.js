const { Shop } = require("../../models/shops");
const { BadRequest } = require("http-errors");
const { Dish } = require("../../models/dishes");

const getShopById = async (req, res) => {
  const id = req.params.id;

  const result = await Shop.findOne({ _id: id }).populate("dishes");
  if (!result) {
    throw new BadRequest(`Not found such id ${id}`);
  }
  res.json(result);
  /*
  await Shop.findOne({ _id: id })
    .populate("dishes")
    .exec()
    .then((shop) => {
      // console.log("Список всех магазинов с блюдами:", shops);
      res.json(shop);
    })
    .catch((err) => {
      console.log("Ошибка при выполнении запроса:", err);
    });*/
};

module.exports = getShopById;
