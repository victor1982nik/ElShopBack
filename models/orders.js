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
    address: {
      type: String,
    },
  },
  // shopid: {
  //   type: Schema.Types.ObjectId,
  //   ref: "shop",
  // },
  shopid: {
    type: String,
  },
  order: [
    {
      // dishid: {
      //   type: Schema.Types.ObjectId,
      //   ref: "dish",
      // },
      _id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0.01,
      },
      qwantity: {
        type: String,
        required: true,
      },
      image: {
        type: String,
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
    address: Joi.string().required(),
  }),
  order: Joi.array().items(
    Joi.object({
      _id: Joi.string(),
      name: Joi.string(),
      price: Joi.number().min(0.01).required(),
      qwantity: Joi.string().required(),
      image: Joi.string(),
    })
  ),
  total: Joi.number().min(0.01).required(),
  shopid: Joi.string(),
});

const Order = model("orders", orderSchema);

module.exports = {
  Order,
  schemaAddOrder,
};
