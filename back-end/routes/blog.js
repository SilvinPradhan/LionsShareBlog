const express = require("express");
// Handle incoming routes
const router = express.Router();

const { data } = require("../controllers/blog");

router.get("/", data);

module.exports = router;
