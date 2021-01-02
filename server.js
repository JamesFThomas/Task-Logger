// Import express package
const express = require('express')
// Initialize new instance of express
const app = express()
// create variable set to value of port server will be listening on
const port = 3000

// Route - main/home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`)
})