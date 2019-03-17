// express
const app = require("express")()

// dotenv
require("dotenv").config()

// secrets
const PORT = process.env.PORT || 5000
const key = process.env.LEAGUE

// 3rd party
const compression = require("compression")
const cors = require("cors")
const helmet = require("helmet")

// enable middlewares
app.use(compression())
app.use(cors())
app.use(helmet())

// landing page
app.get("/", (req, res) => {
  res.send("Hello!")
})

// listen to port
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`)
})
