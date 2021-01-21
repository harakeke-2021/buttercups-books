const express = require('express')
const db = require('./db')

const router = express.Router()

const currentUser = { id: 4, name: 'kenneth' }

router.get('/', (req, res) => {
  const bookList = [
    { id: 1, title: 'Crescent City', author: 'Sarah J. Maas', pub_date: '3-3-2020', donor: { id: 1, name: 'ashby' } },
    { id: 2, title: 'The Invisible Life of Addie Larue', author: 'V. E. Schwab', pub_date: '6-10-2020', donor: { id: 1, name: 'ashby' } },
    { id: 3, title: 'The House in the Cerulean Sea', author: 'TJ Klune', pub_date: '17-3-2020', donor: { id: 3, name: 'christo'  }},
    { id: 4, title: 'Rhythm of War', author: 'Brandon Sanderson', pub_date: '17-11-2020', donor: { id: 4, name: 'kenneth' }}
  ]
  // res.send(JSON.stringify(bookList))
  res.render('home', { bookList, currentUser })
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
