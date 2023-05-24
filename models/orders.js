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
  order: {
    type: String,
  },
  sum: {
    type: String,
  },
});

const schemaAddUser = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(3).required(),
  email: Joi.string()
    .email()
    .pattern(emailRegexp, "Email must be in format mail@mail.com")
    .required(),
  adress: Joi.string().required(),
});

const User = mongoose.model("users", userSchema);

module.exports = {
  User,
  schemaAddUser,
};
