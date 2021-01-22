const express = require('express')
const db = require('./db')

const router = express.Router()

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
  db.getUserByName(req.body.loginName)
    .then(user => {
      res.cookie('userId', `${user.id}`).redirect('/')
    })
})

router.get('/logout', (req, res) => {
  res.clearCookie('userId').redirect('/')
})

// PERSONAL PROFILE ROUTE
router.get('/profile', (req,res) => { 

  res.render('profile')
})

// PROFILE ROUTE BY ID
router.get('/profile/:id', (req,res) => {

  const id = Number(req.params.id)

  db.listUsersBooks(id)
    .then((result) => {
      console.log('profile: ',result)
      res.render('profile', result)
    })



})


module.exports = router
