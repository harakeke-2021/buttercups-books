// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const database = require('knex')(config)


module.exports = {
    listAllBooks: listAllBooks,
    listUsersBooks: listUsersBooks
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
