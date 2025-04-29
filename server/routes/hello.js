const express = require("express");
const router = express.Router();

// Success case: Returns "Hello, world!"
router.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Failure case: Returns an error if the query parameter 'name' is missing
router.get("/greet", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Name query parameter is required" });
  }
  res.json({ message: `Hello, ${name}!` });
});

module.exports = router;
