const mongoose = require('mongoose')

const DB_USER = 'eddie'
const DB_PASSWORD = 'wuPZXcxEkVHURC1H'
const DB_HOST = 'kodemia12va.r1f30.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


function connect () {
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
}

module.exports = connect