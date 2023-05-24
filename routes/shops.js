const express = require("express");

const router = express.Router();

const { ctrlWrapper } = require("../middlewares/ctrlWrapper");
const getShops = require("../controllers/shops/getShops");

router.get("/", ctrlWrapper(getShops));

module.exports = router;
