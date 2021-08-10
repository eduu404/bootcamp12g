const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koderModel')
const server = express()

const_DB_USER = 'eddie'
const DB_PASSWORD = 'wuPZXcxEkVHURC1H'
const DB_HOST = 
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`




server.get('/', (request, response) => {
    response.json({
        message: 'API with mongoose'
    })
})

server.get('/koders', async (request, response) => {

    const koders = await Koder.find()


    response.json({
        success: true
        message: 'all koders of DB',
        data: {
            koders
        }
    })
})

//Práctica:

//get /koders?gender=m&age=23
//post /koders
//patch /koders
//delete /koders


Mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})