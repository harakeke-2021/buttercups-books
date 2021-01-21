// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const database = require('knex')(config)


module.exports = {
    listAllBooks: listAllBooks
}

function listAllBooks(db =database){

  return db('books')
}
