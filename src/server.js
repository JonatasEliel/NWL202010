// Import libraries
const express = require("express");
const path = require("path");
const pages = require('./pages.js')

// Starting express
const server = express();

server
  // Using req's body
  .use(express.urlencoded({extended: true}))

  // Using static files
  .use(express.static("public"))

  // Set up template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  // Creating application routes
  .get('/', pages.index)
  .get('/orphanages', pages.orphanages)
  .get('/orphanage', pages.orphanage)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

// Turn on server
server.listen(5500);