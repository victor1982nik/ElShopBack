const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { ValidationError } = require("../helpers/errors");
const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

const orderSchema = new Schema({
  user: {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Set email for user"],
    },
    phone: {
      type: String,
    },
    adress: {
      type: String,
    },
  },
  shopid: {
    type: Schema.Types.ObjectId,
    ref: "shop",
  },
  order: [
    {
      // dishid: {
      //   type: Schema.Types.ObjectId,
      //   ref: "dish",
      // },
      name: {
        type: String,
      },
      price: {
        type: Number,
        required: true,
        min: 0.01,
      },
      quantity: {
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
  user: Joi.object({
    name: Joi.string().min(3).max(30).required(),
    phone: Joi.string()
      .pattern(phoneRegexp, "Phone must be in format +380xxxxxxxxx")
      .required(),
    email: Joi.string()
      .email()
      .pattern(emailRegexp, "Email must be in format mail@mail.com")
      .required(),
    adress: Joi.string().required(),
  }),
  order: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      price: Joi.number().min(0.01).required(),
      quantity: Joi.number().min(1).required(),
      cost: Joi.number().min(1).required(),
    })
  ),
  total: Joi.number().min(0.01).required(),
});

const Order = model("orders", orderSchema);

module.exports = {
  Order,
  schemaAddOrder,
};
