const mongoose = require("mongoose")

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        phone: String,
        city: String,
        role: { type: String, enum: ["Manager", "PitchOwner", "Player"] },
        verification_email: Boolean,
        status: Boolean,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    })
)

module.exports = User