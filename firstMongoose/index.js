const  mongoose = require('mongoose')

const DB_USER = 'eddie'
const DB_PASSWORD = 



const url = ''

// Schema
const koderSchema = new mongoose.koderSchema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true,
        trim: true
    },
    age: {
        type: Number,
        min: 0,
        max: 90,
        require: true,
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        require: true
    }
})


// model

mongoose.model('koders', )

//

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async (Connection) => {
        console.log('Yeii DB Connected')

     //   const koders = await koder.find({})
     //   console.log(koders)

     const 
    })
    .catch(err => {
        console.log('Error: ', err)
    })

