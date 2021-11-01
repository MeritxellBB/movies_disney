const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
    {
        title: { type: String, require: true },
        year: { type: Number, require: true },
        genre: { type: String, require: true },
        rating: { type: Number, require: true }
    },
    { timestamps: true }
);

const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;