const express = require("express");

const router = express.Router();

const { ctrlWrapper } = require("../middlewares/ctrlWrapper");
const ctrl = require("../controllers/shops");

router.get("/", ctrlWrapper(ctrl.getShops));
router.get("/:id", ctrlWrapper(ctrl.getShopById));

module.exports = router;
