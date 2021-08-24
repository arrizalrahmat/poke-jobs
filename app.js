const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', route)

app.listen(port, _ => {
  console.log('Listening to port:', port)
})