const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { ValidationError } = require("../helpers/errors");
const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

const orderSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

const schemaAddOrder = Joi.object({
  user: Joi.object({
    name: Joi.string().min(3).max(30).required(),
    phone: Joi.string().pattern(
      phoneRegexp,
      "Phone must be in format +380xxxxxxxxx"
    ),
    email: Joi.string()
      .email()
      .pattern(emailRegexp, "Email must be in format mail@mail.com"),
    address: Joi.string(),
  }),
  order: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      price: Joi.number().min(0.01).required(),
      qwantity: Joi.number().min(1).required(),
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
