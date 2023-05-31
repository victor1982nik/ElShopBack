const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();
const shopsRouter = require("./routes/shops");
const ordersRouter = require("./routes/orders");
const { errorHandler } = require("./helpers/apiHelpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/shops", shopsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Illegal path" });
});

app.use(errorHandler);

module.exports = app;
