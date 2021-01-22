const express = require('express')
const db = require('./db')

const router = express.Router()

// HOMEPAGE
router.get('/', (req, res) => {
  console.log('cookies:', req.cookies)
  db.listAllBooks()
    .then(books => {
      const viewData = {
        bookList: books,
      }
      res.render('home', viewData)
    })
})

// FUNCTION TESTING ROUTE
router.get('/functions/:id', (req, res) => {

  const id = Number(req.params.id)

  db.listUsersBooks(id)
    .then((result) => {
      console.log('users books: ', result)
    })

  res.send(`functions testing! ${id}`)
})

// LOGIN GET ROUTE
router.get('/login', (req, res) => {
  res.render('login')
})

// LOGIN POST ROUTE
 router.post('/login', (req, res) => {
  console.log(req.body)
})

//PLEASE REMOVE LATER  .PLACEHOLDER id is meant to represent for cookie user id. PLEASE REMOVE LATER
router.get('/donate/:id', (req,res) => {
  const id = 10//req.params.id
  
  viewData = {
    id: id
  }
  res.render('donate', viewData)
})

// DONATE POST ROUTE
router.post('/donate/:id', (req,res) => {

  const {title, author, pubDate} = req.body

  const viewData = {
    donor_id: 1,
    title: title,
    author:author,
    pub_date: pubDate
  }

  db.donateBook(viewData)
    .then((result) => {
      res.redirect('/')
    })

})



module.exports = router
