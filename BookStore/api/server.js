const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())

const db_url = "mongodb+srv://krishnamoorthy:yAUVdK.fGxFxy5P@rest.yirwrla.mongodb.net/?retryWrites=true&w=majority";
const books = require('../api/routes/book-routes')



app.use("/",books)

mongoose.connect(db_url, 
    {'useNewUrlParser' : true})
    .then(() => console.log("connect to db !!"))
    .catch(console.error)


app.listen(3001,() => console.log("Server Started..!!"))  