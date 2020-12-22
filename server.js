

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const indexrouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/mybrary", {
    useNewUrlParser: true

})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', ()=>console.log('Database is connected'))
 app.use('/', indexrouter)


 require('dotenv').config();
app.listen(process.env.PORT || 3000)
