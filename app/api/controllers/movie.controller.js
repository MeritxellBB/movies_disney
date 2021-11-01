const Movie = require("../models/Movie.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createMovie = async (req, res, next) => {
    try {
        const newMovie = new Movie();
        newMovie.title = req.body.title;
        newMovie.year = req.body.year;
        newMovie.genre = req.body.genre;
        newMovie.rating = req.body.rating;
        const MovieDb = await newMovie.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { movie: MovieDb.movie }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllMovie = async (req, res, next) => {
    try {
        // Si no pasais paginación por query params quitar el if
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const movie = await Movie.find().skip(skip).limit(20);
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { movie: movie }
            });
        } else {
            const movie = await Movie.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { movie: movie }
            });
        }
    } catch (error) {
        return next(error)
    }
}

const getMovieById = async (req, res, next) => {
    try {
        const { movieId } = req.params;
        const movieById = await Movie.findById(movieId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { movie: movieById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createMovie, getAllMovie, getMovieById };