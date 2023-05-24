const mongoose = require("mongoose");
const Joi = require("joi");
// const { ValidationError } = require("../helpers/errors");

const orderSchema = new mongoose.Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  shopid: {
    type: Schema.Types.ObjectId,
    ref: "shop",
  },
  order: [
    {
      dishid: {
        type: Schema.Types.ObjectId,
        ref: "dish",
      },
      price: {
        type: Number,
        required: true,
        min: 0.01,
      },
      qwantity: {
        type: Number,
        required: true,
        min: 1,
      },
      cost: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
    min: 0.01,
  },
});

const schemaAddOrder = Joi.object({
  order: Joi.array().items(
    Joi.object({
      price: Joi.number().min(0.01).required(),
      qwantity: Joi.number().min(1).required(),
      cost: Joi.number().min(1).required(),
    })
  ),
  total: Joi.number().min(0.01).required(),
});

const Order = mongoose.model("orders", orderSchema);

module.exports = {
  Order,
  schemaAddOrder,
};
