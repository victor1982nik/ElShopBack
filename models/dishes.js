const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const dishSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },

  // dishes: [{ type: Schema.Types.ObjectId, ref: "dish" }],
});

const Dish = model("dish", dishSchema);

module.exports = {
  Dish,
};
