const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
// Connectio to db
require("./config/db")
// Route
const auth = require("./routes/auth")
app.use("/auth", auth)
// const sports_category = require("./routes/sports_category")
// app.use("/sports_category", sports_category)
app.all("*", (req, res) => {
  res.send("Page not found")
})
// Error handler
const errorHandler = require("./middlewares/errorHandler")
app.use(errorHandler)
// Port
app.listen(process.env.PORT || 2001, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
)

module.exports = app