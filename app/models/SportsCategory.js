const mongoose = require("mongoose")

const SportsCategory = mongoose.model(
    "SportsCategory",
    new mongoose.Schema({
        name: String,
        status: Boolean,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    })
)

module.exports = SportsCategory