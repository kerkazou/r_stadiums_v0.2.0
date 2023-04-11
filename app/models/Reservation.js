const mongoose = require("mongoose")

const Reservation = mongoose.model(
    "Reservation",
    new mongoose.Schema({
        sportsArea: { type: mongoose.Schema.Types.ObjectId, ref: "SportsArea" },
        playerTeam: Array,
        reservationDate: String,
        hour: String,
        archived: Boolean,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    })
)

module.exports = Reservation