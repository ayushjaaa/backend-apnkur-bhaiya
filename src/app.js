//express confuguration
//middelware 
//routes

// */
// /user
// /products
// /post/

// for every action we create diffrent end posints
// */



// 2--
// /iska ye kam nhi rahat kon re route kya kare ge but iska kam rhate hai ke kon kon se routes rsahe ge,kon se route hai kon sa cantroller chale ga ye is kam nhi hota ye hota hai rotes folder ka 
// routes  file mai kis route pai kon sa cantroler chle ga//
const express = require('express')

const indexRoutes = require("./routes/index.routes")
const app = express()
app.use('/',indexRoutes)
module.exports = app



