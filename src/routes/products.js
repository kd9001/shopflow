const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.json({ message: "Get all products" });
});

router.post("/products", (req, res) => {
  res.json({ message: "Product created" });
});

module.exports = router;
