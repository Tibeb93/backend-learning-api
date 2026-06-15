const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Users Route",
  });
});

module.exports = router;
