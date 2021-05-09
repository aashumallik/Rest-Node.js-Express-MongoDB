require('dotenv').config()

const express = require('express') //created a varialble require('express') - this is going to pull express library
const app = express() // creates a app variable to configure our server
const mongoose = require('mongoose')//created a varialble require('mongoose') - this is going to pull mongoose library

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true}) //connecting to database and naming the database 'users'
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.listen(3000, () => console.log('Server Started Bitch')) // listening on port 3000
// logging that server has started

app.use(express.json()) // server accepts JSON
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)