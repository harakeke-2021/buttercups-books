// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const database = require('knex')(config)


module.exports = {
    listAllBooks: listAllBooks,
    listUsersBooks: listUsersBooks,
    donateBook: donateBook,
    getUserById: getUserById,
    getUserByName: getUserByName,
    getBookInfo: getBookInfo
}

// LISTS ALL BOOKS IN LIBRARY
function listAllBooks(db =database){

  return db('books')
}

// LISTS ALL BOOKS BELONGING TO USER
function listUsersBooks(id, db=database){

  return db('users')
    .leftJoin('books', 'users.id', 'donor_id')
    .where('users.id', id)
    .select( 'users.id as userId', 'donor_id as donorId', 'name', 'title', 'author', 'pub_date as pubDate')
    .then( result => {
      return {
      userId:result[0].userId,
      donorId: result[0].donorId,
      name: result[0].name,
      books: result.map(books => ({
        title:books.title,
        author:books.author,
        pubDate:books.pubDate
      }))
    }
  })
}

// USER DONATES BOOK TO LIBRARY
function donateBook (book, db =database){
  return db('books')
  .insert(book)  
}

// GETS USER BY ID
function getUserById(id, db = database){
  return db('users')
  .where('id', id )
  .first()
}

// GETS USER BY NAME
function getUserByName(name, db =database){
  const lowername = name.toLowerCase()  
  return db('users')
    .where('name', lowername)
    .first()
}

// GET INDIVIDUAL BOOK INFO
function getBookInfo(id, db = database){
  return db('books')
  .where('id', id)
  .first()
}

