const express = require('express')
const db = require('./db')

const router = express.Router()

// HOMEPAGE
router.get('/', (req, res) => {
  const uid = req.cookies.userId

  const pr = [db.listAllBooks()]
  if (uid) pr.push(db.getUserById(uid))

  Promise.all(pr)
    .then(([books, user]) => {
      const viewData = {
        bookList: books
      }
      if (user) viewData.currentUser = user

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
  db.getUserByName(req.body.loginName)
    .then(user => {
      res.cookie('userId', `${user.id}`).redirect('/')
    })
})

router.get('/logout', (req, res) => {
  res.clearCookie('userId').redirect('/')
})
//PLEASE REMOVE LATER  .PLACEHOLDER id is meant to represent for cookie user id. PLEASE REMOVE LATER
router.get('/donate', (req,res) => {
  const uid = req.cookies.userId
  if(!uid) res.redirect('/login')

  db.getUserById(uid)
    .then(user => {
      viewData = {
        currentUser: user,
        id: uid
      }
      res.render('donate', viewData)
    })
})

// DONATE POST ROUTE
router.post('/donate', (req,res) => {

  const {title, author, pubDate} = req.body
  const uid = req.cookies.userId

  const viewData = {
    donor_id: uid,
    title: title,
    author:author,
    pub_date: pubDate
  }

  db.donateBook(viewData)
    .then(() => {
      res.redirect('/')
    })

})

module.exports = router
