const express = require('express')
const mongoos = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const PORT = process.env.PORT || 3000

const app = express()
app.use( express.json({extended : true}) )
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/auth', require('./routes/auth.routes'))
app.use('/author', require('./routes/author.routes'))

const start = async () => {
    try{
        await mongoos.connect(process.env.DB_HOST)

        app.listen(PORT, () => {
            console.log('Server started')
        })
    }   
    catch(e){
        console.error(e)
    }
}

start()

