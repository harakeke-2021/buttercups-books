const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  db.listAllBooks()
  .then(books => {
    const viewData = {
      bookList: books,
      currentUser: {}
    }
    res.render('home', viewData)
  })
})

router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router
