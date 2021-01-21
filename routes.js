const express = require('express')
const db = require('./db')

const router = express.Router()

//get all books
//render to home
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

router.get('')

module.exports = router
