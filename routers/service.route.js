// import express
const express = require('express');
// import router from express js
const router = express.Router();
// import service controller
const services = require('../controllers/service.controller');
// here we got service controller though we save data to database so we using .post method of express js
router.route('/services').get(services);

// here we export router
module.exports = router;