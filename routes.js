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

router.get('/functions/:id', (req, res) => {

  const id = Number(req.params.id)

  db.listUsersBooks(id) 
    .then((result) => {
      console.log('users books: ', result)
    })


  res.send(`functions testing! ${id}`)
})

router.get('/login', (req, res) => {
  res.render('login')
})

 router.post('/login', (req, res) => {
   console.log(req.body)
 })


module.exports = router
