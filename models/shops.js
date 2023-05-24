const mongoose = require("mongoose");
// const Joi = require("joi");

const shopSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Set name for shop"] },
  adress: { type: String },
  dishes: [{ type: Schema.Types.ObjectId, ref: "dish" }],
});

const Shop = mongoose.model("shops", shopSchema);

module.exports = {
  Shop,
};
