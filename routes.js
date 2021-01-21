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

router.get('/functions/:id', (req, res) => {

  const id = Number(req.params.id)

  db.listUsersBooks(id) 
    .then((result) => {
      console.log('users books: ', result)
    })


  res.send(`functions testing! ${id}`)
})

module.exports = router
