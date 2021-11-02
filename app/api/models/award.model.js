const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AwardSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    year: [{ type: Number, ref: "movie", required: true }]
});

const Award = mongoose.model("award", AwardSchema);
module.exports = Award;