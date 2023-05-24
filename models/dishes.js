const mongoose = require("mongoose");
// const Joi = require("joi");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },

  // dishes: [{ type: Schema.Types.ObjectId, ref: "dish" }],
});

const Dish = mongoose.model("dishes", dishSchema);

module.exports = {
  Dish,
};
