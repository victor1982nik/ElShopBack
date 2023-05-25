// const mongoose = require("mongoose");
// const Joi = require("joi");
// // const { ValidationError } = require("../helpers/errors");
// const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
// const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Set name for user"],
//   },
//   email: {
//     type: String,
//     required: [true, "Set email for user"],
//   },
//   phone: {
//     type: String,
//   },
//   adress: {
//     type: String,
//   },
// });

// const schemaAddUser = Joi.object({
//   name: Joi.string().min(3).max(30).required(),
//   phone: Joi.string()
//     .min(3)
//     .pattern(phoneRegexp, "Phone must be in format +380xxxxxxxxx")
//     .required(),
//   email: Joi.string()
//     .email()
//     .pattern(emailRegexp, "Email must be in format mail@mail.com")
//     .required(),
//   adress: Joi.string().required(),
// });

// const User = mongoose.model("users", userSchema);

// module.exports = {
//   User,
//   schemaAddUser,
// };
