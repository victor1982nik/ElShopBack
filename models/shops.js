const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const shopSchema = new Schema({
  name: { type: String, required: [true, "Set name for shop"] },
  adress: { type: String },
  dishes: [{ type: Schema.Types.ObjectId, ref: "dish" }],
});

const Shop = model("shop", shopSchema);

module.exports = {
  Shop,
};
