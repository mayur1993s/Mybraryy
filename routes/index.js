const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.render('index')
    console.log('hello world')
})


router.get('/about', (req, res)=>{
    res.send('ur bictch')
})

module.exports = router