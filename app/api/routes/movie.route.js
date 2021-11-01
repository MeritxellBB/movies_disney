const express = require("express");
const router = express.Router();
const { isAuth } = require("../../../middlewares/auth.middlewares");

const { createMovie, getAllMovie, getMovieById } = require("../controllers/movie.controller");

router.post("/create", [isAuth], createMovie);
router.get("/", getAllMovie);
router.get("/:movieId", [isAuth], getMovieById);

module.exports = router;