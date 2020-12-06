const express = require("express")

const app = express()

const routes = require("./routes")

app.use(routes)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

