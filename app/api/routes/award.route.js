const express = require("express");
const router = express.Router();

const { createAward, getAllAwards } = require("../controllers/award.controller");

router.post("/create", createAward);
router.get("/", getAllAwards);

module.exports = router;