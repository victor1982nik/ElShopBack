const mongoose = require("mongoose");
const Joi = require("joi");
const { ValidationError } = require("../helpers/errors");

const userSchema = new mongoose.Schema({
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
  orders: [{ type: Schema.Types.ObjectId, ref: "order" }],
});

const schemaAddUser = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string().min(3).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  adress: Joi.string(),
});

const User = mongoose.model("users", userSchema);

module.exports = {
  User,
};
