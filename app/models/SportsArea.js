const mongoose = require("mongoose")

const SportsArea = mongoose.model(
    "SportsArea",
    new mongoose.Schema({
        name: String,
        pitch_owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        image: String,
        opening: String,
        closing: String,
        Localisation: String,
        discruption: String,
        web_site: String,
        status: Boolean,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    })
)

module.exports = SportsArea