const express = require("express");

const router = express.Router();

const { ctrlWrapper, addOrderValidation } = require("../middlewares/");
const ctrl = require("../controllers/orders");

router.get("/", ctrlWrapper(ctrl.getOrders));
router.post("/", addOrderValidation, ctrlWrapper(ctrl.addOrder));

module.exports = router;
