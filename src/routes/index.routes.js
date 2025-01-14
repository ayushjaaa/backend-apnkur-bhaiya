const express = require('express');
const { route } = require('../app');
const cantroler = require('../controller/index.controller')
const  router = express.Router();


router.get('/',cantroler.indexCOntroller)
module.exports = router