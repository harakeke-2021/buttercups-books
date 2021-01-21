const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')
const shims = require('./shimroutes')

const server = express()

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

server.use('/shim/', shims)
server.use('/', routes)

module.exports = server
