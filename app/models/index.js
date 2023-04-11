const mongoose = require('mongoose')

const db = {}

db.mongoose = mongoose

db.user = require("./User")
db.city = require("./City")
db.reservation = require("./Reservation")
db.sportsArea = require("./SportsArea")
db.sportsCategory = require("./SportsCategory")

module.exports = db