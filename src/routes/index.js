var express = require("express");
var router = express.Router();
const addMath = require("../controller/addController");
const getMath = require("../model/find");

/* GET home page. */
router.get("/", getMath);
router.post("/addMath", addMath);

module.exports = router;
