const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config/config')
const cors = require('cors')

const location = require('./routes/location')
const holeNumber = require('./routes/holeNumber')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.connect(config.mongoUri, {useNewUrlParser: true})
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', location)
app.use('/', holeNumber)

app.listen(config.port, (err) => {
    if(err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

