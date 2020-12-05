const express = require("express")
const cors = require("cors")

const app = express()

const routes = require("./routes")

app.use(cors())
app.use(routes)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

