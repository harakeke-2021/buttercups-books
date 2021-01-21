const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('cookies:', req.cookies)
  db.listAllBooks()
  .then(books => {
    const viewData = {
      bookList: books,
      currentUser: {}
    }
    res.render('home', viewData)
  })
})

module.exports = router
