const { schemaAddOrder } = require("../models/orders");
const { ValidationError } = require("../helpers/errors");

const addOrderValidation = (req, res, next) => {
  const { error } = schemaAddOrder.validate(req.body);
  if (error) {
    next(new ValidationError(error.details));
  }
  next();
};

module.exports = addOrderValidation;
