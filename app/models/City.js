const mongoose = require("mongoose")

const City = mongoose.model(
    "City",
    new mongoose.Schema({
        name: String,
        status: Boolean,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    })
)

module.exports = City