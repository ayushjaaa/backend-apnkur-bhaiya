//express confuguration
//middelware 
//routes

// */
// /user
// /products
// /post/

// for every action we create diffrent end posints
// */
const express = require('express')
const controller = require('./controller/index.controller')
const app = express()



app.get('/',controller.indexCOntroller)
module.exports = app
app.get('/about',controller.aboutController)


