// import express
const express = require('express');
// import router from express js
const router = express.Router();
// import service controller
const AllServices = require('../controllers/service.controller')
// here we got service controller though we save data to database so we using .post method of express js

// Show all services
router.route('/').get(AllServices.services);
// Create a service
router.route('/addService').post(AllServices.addService);
// Update a service
router.route('/updateService/:id').put(AllServices.updateService);
// Delete a service
router.route('/deleteService/:id').delete(AllServices.deleteService);
// select a service
router.route('/selectService/:id').get(AllServices.selectService);

// here we export router
module.exports = router;