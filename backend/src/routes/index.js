const express = require("express");
const router = express.Router();

const { testApi } = require("../controllers/testController");

// Test API
router.get("/test", testApi);

module.exports = router;
