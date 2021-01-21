const express = require('express')
const db = require('./db')

const router = express.Router()


router.get('/', (req, res) => {
  res.render('home', {})
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const { user } = req.body
  console.log(user)
})

router.get('/yo', (req, res) => {
  res.send('yopage (but shimmed)!')
})

module.exports = router
